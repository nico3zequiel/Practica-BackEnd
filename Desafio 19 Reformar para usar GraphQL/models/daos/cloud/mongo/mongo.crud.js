class MongoHelpers {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const document = await this.model(data).save();
    return document;
  }

  async readAll(filter) {
    return await this.model.find(filter, { __v: 0 }).lean();
  }

  async readOne(filter) {
    const asd = await this.model.findOne(filter, { __v: 0 });
    return asd
  }

  async update(filter, data) {
    return await this.model.updateOne(filter, { $set: data }).lean();
  }

  async delete(filter) {
    return await this.model.deleteOne(filter);
  }
}

module.exports = MongoHelpers;