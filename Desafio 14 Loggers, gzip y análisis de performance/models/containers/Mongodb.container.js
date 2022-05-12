import mongoose from 'mongoose';
import { formatErrorObject } from '../../utils/api.utils.js';
import { STATUS } from '../../constants/api.constants.js';

const { INTERNAL_ERROR, NOT_FOUND } = STATUS;

class MongoDBContainer {
  constructor(collection, Schema) {
    this.model = mongoose.model(collection, Schema);
  };

  async getAll(filter = {}) {
    try{
      const documents = await this.model.find(filter, { __v: 0 }).lean();
      return documents;
    }
    catch(error) {
      const newError = formatErrorObject(INTERNAL_ERROR.tag, error.message);
      errorLogger.Error(JSON.stringify(newError));
      throw new Error(JSON.stringify(newError));
    }
  }

  async getById(id) {
    try {
      const document = await this.model.findById(id, { __v: 0 }).lean();
      if (!document) {
        const errorMessage = `Resource with id ${id} does not exist in our records`;
        const newError = formatErrorObject(NOT_FOUND.tag, errorMessage);
        errorLogger.Error(JSON.stringify(newError));
        throw new Error(JSON.stringify(newError));
      } else return document;
    }
    catch(error) {
      const newError = formatErrorObject(INTERNAL_ERROR.tag, error.message);
      errorLogger.Error(JSON.stringify(newError));
      throw new Error(JSON.stringify(newError));
    }
  }

  async createItem(resourceItem) {
    try {
      const newItem = new this.model(resourceItem);
      await newItem.save();
      return newItem;
    }
    catch (err) {
      const newError = formatErrorObject(INTERNAL_ERROR.tag, err.message);
      errorLogger.Error(JSON.stringify(newError));
      throw new Error(JSON.stringify(newError));
    }
  }
}

export default MongoDBContainer;