const MessageResolver = require("./collections/messages.resolver");
const ProductResolver = require("./collections/products.resolver");
const UserResolver = require("./collections/users.resolver");

class Resolver {
  get product() {
    return new ProductResolver();
  }

  get message() {
    return new MessageResolver();
  }

  get user() {
    return new UserResolver();
  }
}

module.exports = Resolver;