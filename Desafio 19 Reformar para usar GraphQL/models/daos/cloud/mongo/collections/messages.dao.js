const ContainerMongo = require("../mongo.container");

class MessageMongoDao extends ContainerMongo {
  static #instance;
  constructor(collection, schema) {
    if(!MessageMongoDao.#instance) {
      super(collection, schema);
      MessageMongoDao.#instance = this;
      return this;
    } 
    else return MessageMongoDao.#instance;
  }

  async getByAuthor(author) {
    return await this.model.readAll({ author });
  }

  // async getAll() {
  //   return await this.model.readAll().populate("author");
  // }

  // async getById() {
  //   return await this.model.readAll().populate("author");
  // }
}

module.exports = MessageMongoDao;