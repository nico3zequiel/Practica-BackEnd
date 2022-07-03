const ContainerMongo = require("../mongo.container");

class UserMongoDao extends ContainerMongo {
  static #instance;
  constructor(collection, schema) {
    if(!UserMongoDao.#instance) {
      super(collection, schema);
      UserMongoDao.#instance = this;
      return this;
    } 
    else return UserMongoDao.#instance;
  }

  async getByEmail(email) {
    const response = await this.model.readOne({ email }, { __v: 0 });
    return response;
  }
}

module.exports = UserMongoDao;