class UserServices {
  render(req) {
    const { params: { idUser }, query: { id } } = req;
    if(idUser && id) throw new Error("Sorry, we cannot understand what you are requesting.");
    if(idUser) return { id: idUser };
    if(id) return { id };
    return null;
  }

  generate(req) {
    const { body, query } = req;
    if(body) return req.body;
    if(query) return req.query;
    throw new Error("Sorry, we cannot understand what you are requesting.");
  }

  preFormat(data, done) {
    const { avatar, firstname, lastname, userEmail, password, location, phone } = data;
    if(location == "-" || isNaN(phone)) throw new Error("Unregistered user");
  }

  format(data) {
    const { avatar, firstname, lastname, email, password, location, phone, admin } = data;
    if(!avatar || !firstname || !lastname || !email || !password || !location || !phone) {
      const response = [];
      const testData = [
        { key: "avatar", value: avatar }, 
        { key: "firstname", value: firstname },
        { key: "lastname", value: lastname },
        { key: "email", value: email },
        { key: "password", value: password },
        { key: "location", value: location },
        { key: "phone", value: phone }
      ];
      testData.forEach(e => !e.value && response.push(e.key));
      throw new Error(`You must correctly fill in the following keys: [${response.join(", ")}]`);
    }
    return true;
  }
}

module.exports = UserServices;