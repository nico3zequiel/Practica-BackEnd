const bcrypt = require("bcrypt");
const Resolver = require("../../graphql/resolvers/index.resolver");

const userResolver = new Resolver().user;

const isValidPassowrd = async (user, password) => await bcrypt.compare(password, user.password);

const loginApi = async ({ data }) => {
  console.log("login: ", { data });
  // try {
  //   const user = await userResolver.getUser(userEmail);
  //   if(!await isValidPassowrd(user, password)) return done(null, false);
  //   done(null, user);
  //   return { message: "User logged in", response: user };
  // }
  // catch(error) { 
  //   done(null, false); 
  //   return error 
  // }
}

module.exports = loginApi;