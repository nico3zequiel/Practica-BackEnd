const request = require("supertest")("http://localhost:8080");
const expect = require("chai").expect;
const should  = require("chai").should();

describe("TEST PRODUCTS - methods HTTP", () => {
  const testing = {}; // recibe un id de el producto a testear.
  const response = { // se genera las condiciones para el reporte.
    post: { login: false, newProduct: false }, 
    get: false, 
    put: false, 
    delete: false 
  };
  const accounts = {
    admin: { username: "admin.new@test.com", password: "test" }, // usuario Admin
    user: { username: "new@test.com", password: "test" }, // usuario Común
    x: { username: "not@registered.com", password: "password" } // usuario no registrado
  };
  let cookie;

  describe('method: [POST]', () => {
    it("Logeo + redireccion a la página de productos", async () => {
      const loged = await request.post("/api/auth/login")
        .send(accounts.admin); // cambiar cuenta entre: [admin | user | x]
      cookie = loged.headers["set-cookie"];
      expect(loged.status).to.eql(302);
      expect(loged.header['location']).to.eql('/api/data/product/get');
      if(cookie) response.post.login = true;
    });
    it("Deberia guardar un producto solo el admin", async () => {
      const newProduct = await request.post("/api/data/product/post")
        .set("Cookie", (cookie || "no-cookie"))
        .send({
          title: "product test 1",
          price: 10,
          thumbnail: "https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/3008811440.jpg",
        });
      expect(newProduct.status).to.eql(201);
      if(newProduct.body && !newProduct.body.error) {
        testing._id = newProduct.body;
        response.post.newProduct = true;
      }
    });
  });

  describe('method: [GET]', () => {
    it("Deberia ingresar a la pagina de productos logeado", async () => {
      const products = await request.get(`/api/data/product/get`)
        .set("Cookie", (cookie || "no-cookie"));
      expect(Array.isArray(products.body)).to.eql(true);
      should.not.equal(products.header['location'], "/");
      if(products.body) response.get = true;
    });
  });

  describe('method: [PUT]', () => {
    it("Deberia actualizar un producto solo el admin", async () => {
      const updated = await request.put(`/api/data/product/put/${testing._id}`)
        .set("Cookie", (cookie || "no-cookie"))
        .send({ title: "product test 1 - actualizado" });
      expect(updated.statusCode).to.eql(202);
      if(updated.body.response) response.put = true;
    });
  });

  describe('method: [DELETE]', () => {
    it("Deberia eliminar un producto solo el admin", async () => {
      const deleted = await request.delete(`/api/data/product/delete/${testing._id}`)
        .set("Cookie", (cookie || "no-cookie"));
      expect(deleted.statusCode).to.eql(202);
      should.equal(deleted.body, testing._id);
      if(deleted.body) response.delete = true;
    });
  });

  after(() => console.log(`
  TEST HTTP FINISHED!
    >> [POST]: ${(response.post.login && response.post.newProduct) ? "✔" : "❌"} 
    >> [GET]: ${response.get ? "✔" : "❌"} 
    >> [PUT]: ${response.put ? "✔" : "❌"} 
    >> [DELETE]: ${response.delete ? "✔" : "❌"} 
  `));
});