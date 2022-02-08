const {promises : fs} = require("fs");

class Contenedor {
  constructor(url) {
    this.url = url;
  }
  
  save = async (obj) => {
    const objs = await this.getAll();                                   // DEVUELVE UN ARRAY.
    const findObj = objs.find(item => item.title == obj.title);         // CONTROLA QUE EL NOMBRE COINCIDA O NO CON UNO YA EXISTENTE.
    const findId = objs.map(item => item.id);                           // DEVUELVE UN ARRAY POR CADA ID

    let newId;                                                          // GUARDA UN NUEVO ID
    if(findId.length == 0) newId = 1                                    // GUARDA 1 SI EL ARRAY ESTA VACIO.
    else newId = Math.max.apply(null, findId) + 1;                      // AUMENTA EL ID EN 1.

    if(findObj) {
      throw new Error("Este producto ya existe.")
    } else {
    
      objs.push({...obj, id: newId});
      await fs.writeFile("./productos.txt", JSON.stringify(objs, null, 2));
      return newId;
    }
  }
  getById = async (id) => {
    const objs = await this.getAll();                                  // DEVUELVE EL ARRAY.
    const idFound = objs.find(item => item.id == id);                  // BUSCA EL ID QUE COINCIDA.
    if(!idFound) return null
    else return idFound;
  }
  getAll = async () => {
    try {
      const objs = await fs.readFile(this.url, "utf-8");
      return JSON.parse(objs);
    } catch (error) {
      throw new Error(`ERROR: ${error.message}`)
    }
  }
  deleteById = async (id) => {
    const objs = await this.getAll();                                 // BUSCA EL ARRAY.
    const deleteId = objs.filter(item => item.id != id)               // FILTRA LOS OBJETOC QUE NO COINCIDEN Y ACTUALIZA EL ARRAY.
    await fs.writeFile("./productos.txt", JSON.stringify(deleteId, null, 2));
  }
  deleteAll = async() => {
    await fs.writeFile(this.url, "[]");                               // BORRA EL CONTENIDO DEL ARRAY.
  }
}

module.exports = Contenedor;




