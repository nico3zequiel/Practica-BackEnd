const CreateDTO = require('../../../models/dtos/create.dto');
const UpdateDTO = require('../../../models/dtos/update.dto');
const Repository = require('../../../models/repositories/index.repository');
const Service = require('../../../services/index.service');
const UserResolver = require('./users.resolver');

class MessageResolver {
  static repo = new Repository().message;
  static validate = new Service().message;

  async getData({ idUser }) {
    try {
      const response = await MessageResolver.repo.getData({ author: idUser });
      return response;
    }
    catch(error) {
      return error
    }
  }

  async postData({ idUser, data }) {
    try {
      const foundUser = await UserResolver.repo.getData(idUser);
      if(foundUser) {
        const response = await MessageResolver.repo.save(new CreateDTO({ author: idUser, text: data.text }));
        return { message: "Message created", response };
      }
    }
    catch(error) {
      return error
    }
  }

  async putData({ id, data }) {
    try {
      const foundMessage = await MessageResolver.repo.getData({ id });
      const updatedData = { ...foundMessage?._doc, text: data.text } // no entieno como se generó el "._doc"
      const validateData = MessageResolver.validate.format(updatedData);
      if(validateData) {
        const response = { _id: id, ...(new UpdateDTO(updatedData)) }
        await MessageResolver.repo.update(id, new UpdateDTO(updatedData));
        return { message: "Message updated", response };
      }
    }
    catch(error) {
      return error
    }
  }

  async deleteData({ id }) {
    try {
      const foundMessage = await MessageResolver.repo.getData({ id });
      if(foundMessage) {
        await MessageResolver.repo.deleteById(id);
        return { message: "Message deleted", response: foundMessage };
      }
    }
    catch(error) {
      return error
    }
  }
}

module.exports = MessageResolver;