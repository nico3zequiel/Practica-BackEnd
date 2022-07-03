const CreateDTO = require('../../models/dtos/create.dto');
const StandardizeDTO = require('../../models/dtos/standardize.dto');
const Repository = require('../../models/repositories/index.repository');
const Service = require('../../services/index.service');
const STATUS = require('../../utils/constants/api.constants');

class UserController {
  static repo = new Repository().user;
  static validate = new Service().user;

  async getData(req, res, next) {
    try {
      const validateReq = UserController.validate.render(req);
      const response = await UserController.repo.getData(validateReq);
      return res.status(STATUS.OK.code).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  async getUser(userEmail) {
    try {
      return await UserController.repo.getByEmail(userEmail);
    }
    catch(error) {
      next(error);
    }
  }

  async postData(req, userEmail, password) {
    const validateReq = UserController.validate.generate(req);
    UserController.validate.preFormat(validateReq);
    const dataStandar = new StandardizeDTO([validateReq, userEmail, password]).user;
    const validateData = UserController.validate.format(dataStandar);
    if(validateData) return await UserController.repo.save(new CreateDTO(dataStandar));
  }
}

module.exports = UserController;