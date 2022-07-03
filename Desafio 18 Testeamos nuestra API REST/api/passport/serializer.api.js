const daosFactory = require("../../models/daos/daos.factory");

const userDao = daosFactory().user;

const serializeApi = (user, done) => {
  console.log("Inside serializer");
  done(null, user._id);
}

const deserializeApi = async (id, done) => {
  console.log("Inside deserializer");
  done(null, await userDao.getById(id));
}

module.exports = { serializeApi, deserializeApi }