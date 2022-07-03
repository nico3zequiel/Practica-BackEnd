const ContainerMongo = require("../mongo.container");

class ProductMongoDao extends ContainerMongo {
  static #instance;
  constructor(collection, schema) {
    if(!ProductMongoDao.#instance) {
      super(collection, schema);
      ProductMongoDao.#instance = this;
      return this;
    } 
    else return ProductMongoDao.#instance;
  }

  async getByName(title) {
    return await this.model.readOne({ title });
  }

  async getByPrice(price) {
    return await this.model.readAll({ price: { $lt: price } });
  }
}

module.exports = ProductMongoDao;