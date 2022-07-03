const CreateDTO = require('../../../models/dtos/create.dto');
const StandardizeDTO = require('../../../models/dtos/standardize.dto');
const Repository = require('../../../models/repositories/index.repository');
const Service = require('../../../services/index.service');

class UserResolver {
  static repo = new Repository().user;
  static validate = new Service().user;

  async getData({ id }) {
    try {
      const response = await UserResolver.repo.getData(id);
      return response;
    }
    catch(error) {
      return error
    }
  }

  async getUser(userEmail) {
    return await UserResolver.repo.getByEmail(userEmail);
  }

  // async postData({ data }) {
  //   try {
  //     UserResolver.validate.preFormat(validateReq);
  //     const validateData = UserResolver.validate.format(data);
  //     const dataStandar = new StandardizeDTO([data]).user;
  //     dataStandar.chatHistory = [];
  //     if(validateData) {
  //       const response = await UserResolver.repo.save(new CreateDTO(dataStandar));
  //       return { message: "User created", response };
  //     }
  //   } catch (error) {
  //     return error
  //   }
  // }
  
  // async putData({ id, data }) {
  //   try {
  //     const foundData = await UserResolver.repo.getById(id);
  //     const asd = UserResolver.validate.preFormat(updatedData);
  //     const updatedData = { ...foundData, ...data }
  //     const validateData = UserResolver.validate.format(updatedData);
  //     if(validateData) {
  //       const response = { id, ...(new UpdateDTO(updatedData)) }
  //       await UserResolver.repo.update(id, new UpdateDTO(updatedData));
  //       return { message: "User updated", response };
  //     }
  //   }
  //   catch(error) {
  //     return error
  //   }
  // }
  
  // async deleteData({ id }) {
  //   try {
  //     const foundData = await UserResolver.repo.getById(id);
  //     if(foundData) {
  //       await UserResolver.repo.deleteById(id);
  //       return { message: "User deleted", response: foundData };
  //     }
  //   }
  //   catch(error) {
  //     return error
  //   }
  // }
}

module.exports = UserResolver;