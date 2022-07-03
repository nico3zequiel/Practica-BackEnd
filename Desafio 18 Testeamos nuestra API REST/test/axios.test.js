const axios = require("axios").default;
const host = "http://localhost:8080";

const accounts = {
  admin: { username: "admin.new@test.com", password: "test" }, // usuario Admin
  user: { username: "new@test.com", password: "test" }, // usuario Común
  x: { username: "not@registered.com", password: "password" } // usuario no registrado
};

axios.post(`${host}/api/auth/login`, accounts.admin)
  .then(res => console.log("res: ", res))
  .catch(err => console.log("err.response: ", err.response))

// (async() => {
//   try { // POST || PUT || DELETE
//     const response = await axios.post(`${host}/api/auth/login`, accounts.admin);
//     console.log("response: ", response);
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

//////////////////////////////////////////////////////////////////////////////////////////////////
// Se intenta realizar el cliente, pero sin lograr comprender como solucionar la autenticación. //
//////////////////////////////////////////////////////////////////////////////////////////////////