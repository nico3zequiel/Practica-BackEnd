const mongoose = require("mongoose");
const dbConfig = require("../../../utils/config/db.config");
const env = require("../../../utils/config/env.config");

const MessageMongoDao = require("./mongo/collections/messagesdao");
const ProductMongoDao = require("./mongo/collections/products.dao");
const UserMongoDao = require("./mongo/collections/users.dao");

class CloudDAOs {
  static #dbInstances = {};

  static #typeDB;

  static #DAO = {
    product: {
      mongo: (collection, schema) => new ProductMongoDao(collection, schema),
      firebase: (collection, schema) => new ProductFirebaseDao(collection, schema)
    },
    message: {
      mongo: (collection, schema) => new MessageMongoDao(collection, schema),
      firebase: (collection, schema) => new MessageFirebaseDao(collection, schema)
    },
    user: {
      mongo: (collection, schema) => new UserMongoDao(collection, schema),
      firebase: (collection, schema) => new UserFirebaseDao(collection, schema)
    }
  };

  static #getDao = (collection) => {
    const schema = require(`../../schemas/${CloudDAOs.#typeDB}/${collection}.schema`);
    return CloudDAOs.#DAO[collection][CloudDAOs.#typeDB](collection, schema);
  };

  constructor(type) {
    CloudDAOs.#typeDB = type;
    console.log(`[${type.toUpperCase()}] Connecting to "${env.DB_NAME}" database...`);
    if(!CloudDAOs.#dbInstances.mongo && type == "mongo") {
      mongoose.connect(dbConfig.mongodb.connect())
        .then(() => console.log(`Connected to the "${env.DB_NAME}" database!`))
        .catch(error => { 
          throw new Error("An error occurred while connecting the database: ", error);
        })
      CloudDAOs.#dbInstances.mongo = this;
      return this;
    } else if(!CloudDAOs.#dbInstances.firebase && type == "firebase") {
      // NO IMPLEMENTADO
    }
    else return CloudDAOs.#dbInstances[type];
  }

  get product() {
    return CloudDAOs.#getDao("product");
  }

  get message() {
    return CloudDAOs.#getDao("message");
  }

  get user() {
    return CloudDAOs.#getDao("user");
  }
};

module.exports = CloudDAOs;