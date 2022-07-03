const daosFactory = require("../models/daos/daos.factory");
const assert = require('node:assert').strict;

describe("TEST PRODUCTS - SUITE", () => {
  let product; // se instancia el dao de Products.
  const testing = {}; // recibe un id de el producto a testear.
  const response = { // se genera las condiciones para el reporte.
    post: false, 
    get: { all: false, one: false }, 
    put: false, 
    delete: false 
  };
  before(() => product = daosFactory().product);

  describe("method: [POST]", () => {
    it("Deberia guardar un producto", async () => {
      const savedProduct = await product.save({ 
        title: "product test 1",
        price: 10,
        thumbnail: "https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/3008811440.jpg",
        createdAt: Date.now(),
        updatedAt: Date.now()
      });
      assert.strictEqual(typeof savedProduct, "object")
      if(savedProduct) {
        testing._id = await savedProduct._id;
        response.post = true;
      }
    });
  });

  describe("method: [GET]", () => {
    it("Deberia leer todos los productos", async () => {
      const allProducts = await product.getAll();
      assert.strictEqual(Array.isArray(allProducts), true);
      assert.strictEqual(allProducts.length >= 0, true);
      if(allProducts) response.get.all = true;
    });
    it(`Deberia leer un producto`, async () => {
      const productFound = await product.getById(testing._id);
      assert.strictEqual(typeof productFound, "object");
      assert.deepStrictEqual(productFound._id, testing._id);
      if(productFound) response.get.one = true;
    });
  });

  describe("method: [PUT]", () => {
    it("Deberia actualizar un producto", async () => {
      const valueToUpdate = { title: "product test 1 - updated" };
      const oldProduct = await product.getById(testing._id);
      await product.updateById(testing._id, valueToUpdate);
      const newProduct = await product.getById(testing._id);
      assert.deepStrictEqual(oldProduct.title != newProduct.title, true);
      if(oldProduct.title != newProduct.title) response.put = true;
    });
  });
  
  describe("method: [DELETE]", () => {
    it("Deberia eliminar un producto", async () => {
      await product.deleteById(testing._id);
      const productDeletd = await product.getById(testing._id);
      assert.deepStrictEqual(productDeletd, null);
      if(!productDeletd) response.delete = true;
    });
  });

  after(() => console.log(`
    TEST SUITE FINISHED!
      >> [POST]: ${response.post ? "✔" : "❌"} 
      >> [GET]: ${(response.get.all && response.get.one) ? "✔" : "❌"} 
      >> [PUT]: ${response.put ? "✔" : "❌"} 
      >> [DELETE]: ${response.delete ? "✔" : "❌"} 
  `));
});