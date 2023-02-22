const contactsRepository = require('../repositories/contacts-repository');

class ContactController {
	async index(request, response) {
		const { orderBy } = request.query;
		const contacts = await contactsRepository.findAll(orderBy);

		return response.json(contacts);
	}

	async show(request, response) {
		const { id } = request.params;
		const contact = await contactsRepository.findById(id);

		if (!contact) {
			return response.status(404).json({ error: 'User not found' });
		}

		return response.json(contact);
	}

	async create(request, response) {
		const { name, email, phone, category_id } = request.body;

		const contactExists = await contactsRepository.findByEmail(email);

		if (!name) {
			return response.status(400).json({ error: 'Name is required' });
		}

		if (contactExists) {
			return response
				.status(400)
				.json({ error: 'This email is already in use' });
		}

		const contact = await contactsRepository.create({
			name,
			email,
			phone,
			category_id,
		});

		return response.json(contact);
	}

	async update(request, response) {
		const { id } = request.params;
		const { name, email, phone, category_id } = request.body;

		const contactExists = await contactsRepository.findById(id);

		if (!contactExists) {
			return response.status(400).json({ error: 'User not found' });
		}

		if (!name) {
			return response.status(400).json({ error: 'Name is required' });
		}

		const contactByEmail = await contactsRepository.findByEmail(email);
		if (contactByEmail && contactByEmail.id !== id) {
			return response
				.status(400)
				.json({ error: 'This email is already in use' });
		}

		const contact = await contactsRepository.update({
			name,
			email,
			phone,
			category_id,
			id,
		});

		return response.json(contact);
	}

	async delete(request, response) {
		const { id } = request.params;

		await contactsRepository.delete(id);

		return response.sendStatus(204);
	}
}

// Singleton
module.exports = new ContactController();
