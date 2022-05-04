import mainServer from './main.js';

import minimist from 'minimist';

import cluster from "cluster";
import os from "os";

const args = minimist(process.argv.slice(2), {
  default: {
    PORT: 8080,
    mode: "fork"
  },
  alias: {
    p: 'PORT',
    m: "mode"
  }
});

if(args.mode == "fork") { // el servidor se inicia en modo FORK.
  console.log(`The server is started in FORK mode with pid ${process.pid}`);
  mainServer(args);
} else if(args.mode == "cluster") { // el servidor se inicia en modo CLUSTER.
  if(cluster.isPrimary) {
    console.log(`The server is started in CLUSTER mode with pid ${process.pid}`);
    const WORK_NUM = os.cpus().length;
    for (let i = 0; i < WORK_NUM; i++) {
      cluster.fork();
    };
    cluster.on("exit", (worker, code) => {
      console.log(`Worker ${worker.process.pid} died :c`);
      cluster.fork();
    })
  } else {
    console.log(`I am a worker proces with pid ${process.pid}.`);
    mainServer(args);
  }
} else throw new Error(`The modality entered [${args.mode}] is not supported.`);

export { args };