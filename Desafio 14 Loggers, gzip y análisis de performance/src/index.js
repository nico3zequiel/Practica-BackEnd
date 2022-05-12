import mainServer from './main.js';

import minimist from 'minimist';

import cluster from "cluster";
import os from "os";
import { errorLogger } from '../utils/logger.utils.js';

const args = minimist(process.argv.slice(2), {
  default: {
    PORT: 8080,
    mode: "fork",
    compression: true
  },
  alias: {
    p: 'PORT',
    m: "mode",
    c: "compression"
  }
});
args.compression = args.compression == "false" ? false : args.compression == "true" ? true : args.compression;

if(args.compression === true || args.compression === false) {
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
  } else {
    errorLogger.error(`The modality entered [${args.mode}] is not supported.`);
    throw new Error(`The modality entered [${args.mode}] is not supported.`);
  }
} else {
  errorLogger.error(`The modality entered [${args.mode}] is not supported.`);
  throw new Error(`The modality entered [${args.compression}] is not supported.`);
}

export { args };