const bcrypt = require("bcrypt");
const Resolver = require("../../graphql/resolvers/index.resolver");

const userResolver = new Resolver().user;

const salt = async () => await bcrypt.genSalt(10);
const createHash = async (password) => await bcrypt.hash(password, await salt());

const registerApi = async (req, userEmail, password, done) => {
  console.log("register: ", { req, userEmail, password });
  done(null, null);
  return { message: "???" }
  // try {
  //   const newUser = await userResolver.postData(req, userEmail, (await createHash(password)));
  //   done(null, newUser);
  //   return { message: "User logged in", response: newUser };
  // }
  // catch(error) { 
  //   done(null, false); 
  //   return error 
  // }
}

module.exports = registerApi;