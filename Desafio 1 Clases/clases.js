//DESAFIO 1 CLASES

//CLASE

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  // DEVUELVE EL NOMBRE COMPLETO DEL USUARIO

  getFullName() {
    return `Nombre completo del usuario ${this.nombre} ${this.apellido}`;
  }

  // PERMITE AGREGAR UNA NUEVA MASCOTA AL PERFIL DEL USUARIO

  addMascotas(nuevaMascota) {
    this.mascotas.push(nuevaMascota);
    console.log(this.mascotas);
  }

  // CUENTA LA CANTIDAD DE MASCOTAS QUE TIENE EL USUARIO

  countMascotas() {
    let cantMascotas = this.mascotas.length;
    console.log("Cantidad de mascotas: " + cantMascotas);
  }

  // PERMITE AGREGAR UN NUEVO LIBRO AL PERFIL DEL USUARIO

  addLibro(newLibros) {
    this.libros.push(newLibros);
    console.log(this.libros);
    console.log(this.libros.length);
  }

  // PERMITE VER LOS LIBROS GUARDADOS EN EL PERFIL DEL USUARIO

  getBookNames() {
    this.libros.map((e) => console.log(e.nombre));
  }
}

// USUARIO 1 CREADO

const usuario1 = new Usuario(
  "Nicolas",
  "Jofre",
  [],
  [
    { tipo: "Perro", nombre: "Teo" },
    { tipo: "Gato", nombre: "Orion" },
  ]
);

console.log(usuario1.getFullName());

usuario1.addMascotas({ tipo: "Perro", nombre: "Ringo" });
usuario1.countMascotas();
usuario1.addLibro({
  nombre: "El señor de los anillos: La comunidad del anillo",
  autor: "J.R.R Tolkien",
});
usuario1.addLibro({
  nombre: "En las montañas de la locura",
  autor: "H.P. Lovecraft",
});
usuario1.addLibro({ nombre: "Los dias del venado", autor: "Liliana Bodoc" });
usuario1.addLibro({ nombre: "Juego de Tronos", autor: "George R.R. Martin" });
usuario1.getBookNames();
