import { fork } from 'child_process';

const getRandom = (res, cant) => {
  const server = fork("./subprocess/random.cjs");
  server.send(cant); // envia la data
  server.on("message", (data) => { // recibe la data
    res.json(data);
  });
}

export { getRandom };