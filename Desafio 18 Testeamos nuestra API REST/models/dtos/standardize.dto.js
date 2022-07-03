class StandardizeDTO {
  static #dataLocation = [
    { code: "(+51)", prefix: "pe", country: "Perú" },
    { code: "(+54)", prefix: "arg", country: "Argentina" },
    { code: "(+34)", prefix: "esp", country: "España" },
    { code: "(+57)", prefix: "co", country: "Colombia" }
  ];
  constructor(data) {
    const dataParsed = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      const values = Object.values(element);
      if(typeof values[0] == "object") dataParsed.push(values.reduce((prev, curr) => ({...prev, ...curr}) , {}));
      else dataParsed.push(element);
    }
    this.data = dataParsed.reduce((prev, curr) => ({...prev, ...curr}) , {});
  }

  get product() {
    return {
      title: this.data.title,
      price: this.data.price,
      thumbnail: this.data.thumbnail
    };
  }
  get user() {
    return {
      avatar: this.data.avatar,
      firstname: this.data.firstname,
      lastname: this.data.lastname,
      email: this.data.userEmail,
      password: this.data.password,
      location: StandardizeDTO.#dataLocation
        .find(e => this.data.location.split(" ")[0].toLowerCase() == e.prefix).country,
      phone: `${StandardizeDTO.#dataLocation
        .find(e => this.data.location.split(" ")[0].toLowerCase() == e.prefix).code} ${req.body.phone}`,
      admin: this.data.userEmail.split(".")[0] == "admin" ? true : false,
    };
  }

  get message() {
    return {
      author: this.data.author,
      text: this.data.text
    };
  }
};

module.exports = StandardizeDTO;