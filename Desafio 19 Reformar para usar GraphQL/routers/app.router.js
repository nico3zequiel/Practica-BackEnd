const { Router } = require('express');
const { graphqlHTTP } = require('express-graphql');
const { loadSchema } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const Resolver = require('../graphql/resolvers/index.resolver');
const errorMiddleware = require('../middlewares/error.middleware');

// const passport = require('../middlewares/passport.middleware');
// const { Strategy: LocalStrategy } = require("passport-local");
// const { loginApi, registerApi } = require('../api/passport.api');

const router = Router();

const product = new Resolver().product;
const user = new Resolver().user;
const message = new Resolver().message;

router.use('/', graphqlHTTP(async() => ({
  schema: await loadSchema('./graphql/schemas/*.gql', { loaders: [new GraphQLFileLoader()] }),
  rootValue: {
    // ↓↓↓↓↓ SE INTENTA HACER LA AUTENTICACION PERO SIN LOGRARLO ↓↓↓↓↓
    // login: passport.authenticate("login", new LocalStrategy(loginApi)),
    // register: passport.authenticate("register", new LocalStrategy({ passReqToCallback: true }, registerApi)),
    // ↑↑↑↑↑ SE INTENTA HACER LA AUTENTICACION PERO SIN LOGRARLO ↑↑↑↑↑
    getAll: {
      product: product.getData,
      user: user.getData,
      message: message.getData
    },
    getById: {
      product: product.getData,
      user: user.getData,
      message: message.getData
    },
    create: {
      product: product.postData,
      message: message.postData
    },
    update: {
      product: product.putData,
      message: message.putData
    },
    delete: {
      product: product.deleteData,
      message: message.deleteData
    }
  },
  graphiql: true
})));

// Error middleware
router.use(errorMiddleware);

module.exports = router;