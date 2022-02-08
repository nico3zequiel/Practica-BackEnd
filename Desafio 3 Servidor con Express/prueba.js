const Contenedor = require("./contenedor");


const crud = async () => {  
  const products = new Contenedor("./productos.txt");
  
  const getId = await products.save(
    {
      title: "Escuadra",
      price: 123.45,
      thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
    });
  // *** DESCOMENTAR PARA EJECUTAR PRUEBA ↓ ***
  // console.log("Id nuevo: ", getId);

  
  await products.save(
    {
      title: "Calculadora",
      price: 234.56,
      thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
    })
  await products.save(
    {
      title: "Globo Terráqueo",
      price: 345.67,
      thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
    })

  
  const buscar = await products.getById(1);
  // *** DESCOMENTAR PARA EJECUTAR PRUEBA ↓ ***
  // console.log("Encontrado: ", buscar);

  
  const objs = await products.getAll();
  // *** DESCOMENTAR PARA EJECUTAR PRUEBA ↓ ***
  // console.log("Todo: ", objs);

  // *** DESCOMENTAR PARA EJECUTAR PRUEBA ↓ ***
  // await products.deleteById(1);
  // await products.deleteAll();
};
crud();