import { args } from '../src/index.js';

const getRandom = async (res, cant) => {
  if(args.mode == "cluster") { // el servidor se inicia en modo CLUSTER.
    // --- MSG ---
    // >> Al no poder importar desde un archivo commonjs decií traer todo el codigo.
    // >> Se reduce el número máximo por defecto ya que mostraba un error 504.
    // --- MSG ---
    let qty;
    if(isNaN(cant)) qty = 10000000;
    else qty = cant;
    const dataRandom = [];
    for(let i = 0; i < qty; i++) {
      dataRandom.push(Math.floor(Math.random() * 1000) + 1);
    }
    const dataRepeat = [];
    const dataObject = {};
    for (let i = 0; i < dataRandom.length; i++) {
      const elem = dataRandom[i];
      if(!dataRepeat.includes(elem)) {
        dataRepeat.push(elem);
        dataObject[`${elem}`] = 1;
      } else dataObject[`${elem}`]++;
    }
    return res.json(dataObject);
  } else { // el servidor se inicia en modo FORK.
    const { fork } = await import("child_process");
    const server = fork("./subprocess/random.cjs");
    server.send(cant); // envia la data
    server.on("message", (data) => { // recibe la data
      return res.json(data);
    });
  }
}

export { getRandom };