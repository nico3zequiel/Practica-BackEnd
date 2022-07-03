const daosFactory = require("../../daos/daos.factory");

class MessageRepository {
	constructor() {
		this.message = daosFactory().message;
	}

	async getData({ id, author }) {
		if(id) return await this.getById(id);
		if(author) return await this.getByAuthor(author);
		return await this.message.getAll();
	}

	async getById(idMsg) {
		const response = await this.message.getById(idMsg);
		if(!response) throw new Error(`the ID: "${idMsg}" entered does not match any message in our database`);
		return response;
	}
	async getByAuthor(idUser) {
		const response = await this.message.getByAuthor(idUser);
		return response;
	}

	async save(data) {
		const response = await this.message.save(data);
		return response;
	}

	async update(idMsg, data) {
		const response = await this.message.updateById(idMsg, data);
		return response;
	}

	async deleteById(idMsg) {
		await this.message.deleteById(idMsg);
	}
}

module.exports = MessageRepository;