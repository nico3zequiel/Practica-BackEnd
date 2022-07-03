const CreateDTO = require('../../../models/dtos/create.dto');
const StandardizeDTO = require('../../../models/dtos/standardize.dto');
const UpdateDTO = require('../../../models/dtos/update.dto');
const Repository = require('../../../models/repositories/index.repository');
const Service = require('../../../services/index.service');

class ProductResolver {
  static repo = new Repository().product;
  static validate = new Service().product;

  async getData({ id }) {
    try {
      const response = await ProductResolver.repo.getData(id);
      return response;
    }
    catch(error) {
      return error;
    }
  }

  async postData({ data }) {
    try {
      const validateData = ProductResolver.validate.format(data);
      const dataStandar = new StandardizeDTO([data]).product;
      if(validateData) {
        const response = await ProductResolver.repo.save(new CreateDTO(dataStandar));
        return { message: "Product created", response };
      }
    }
    catch(error) {
      return error
    }
  }

  async putData({ id, data }) {
    try {
      const foundData = await ProductResolver.repo.getById(id);
      const updatedData = { ...foundData?._doc, ...data } // no entieno como se generó el "._doc"
      const validateData = ProductResolver.validate.format(updatedData);
      if(validateData) {
        const response = { _id: id, ...(new UpdateDTO(updatedData)) }
        await ProductResolver.repo.update(id, new UpdateDTO(updatedData));
        return { message: "Product updated", response };
      }
    }
    catch(error) {
      return error
    }
  }

  async deleteData({ id }) {
    try {
      const foundData = await ProductResolver.repo.getById(id);
      if(foundData) {
        await ProductResolver.repo.deleteById(id);
        return { message: "Product deleted", response: foundData };
      }
    }
    catch(error) {
      return error
    }
  }
}

module.exports = ProductResolver;