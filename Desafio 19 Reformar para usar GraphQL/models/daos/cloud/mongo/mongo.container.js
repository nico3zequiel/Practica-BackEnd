const mongoose = require("mongoose");
const MongoHelpers = require("./mongo.crud");

class ContainerMongo {
  constructor(collection, schema) {
    this.model = new MongoHelpers(mongoose.model(collection, schema));
  }

  async getAll() {
    return await this.model.readAll({});
  }

  async getById(id) {
    return await this.model.readOne({ _id: id });
  }

  async save(data) {
    return await this.model.create(data);
  }

  async updateById(id, data) {
    return await this.model.update({ _id: id }, data);
  }

  async deleteById(id) {
    return await this.model.delete({ _id: id });
  }
}

module.exports = ContainerMongo;