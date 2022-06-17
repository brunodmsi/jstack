const { v4: uuid } = require('uuid');

let contacts = [
	{
		id: uuid(),
		name: 'José',
		email: 'jose@ex.com',
		phone: '123123123',
		category_id: uuid(),
	},
	{
		id: uuid(),
		name: 'Bruno',
		email: 'bruno@ex.com',
		phone: '123123123',
		category_id: uuid(),
	},
];

class ContactsRepository {
	findAll() {
		return new Promise((resolve) => {
			resolve(contacts);
		});
	}

	findById(id) {
		return new Promise((resolve) => {
			resolve(contacts.find((contact) => contact.id === id));
		});
	}

	findByEmail(email) {
		return new Promise((resolve) => {
			resolve(contacts.find((contact) => contact.email === email));
		});
	}

	create({ name, email, phone, category_id }) {
		return new Promise((resolve) => {
			const newContact = {
				id: uuid(),
				name,
				email,
				phone,
				category_id,
			};

			contacts.push(newContact);
			resolve(newContact);
		});
	}

	update({ name, email, phone, category_id, id }) {
		return new Promise((resolve) => {
			const updatedContact = {
				id,
				name,
				email,
				phone,
				category_id,
			};

			contacts = contacts.map((contact) => {
				const data = contact.id === id ? updatedContact : contact;
				return data;
			});

			resolve(updatedContact);
		});
	}

	delete(id) {
		return new Promise((resolve) => {
			contacts = contacts.filter((contact) => contact.id !== id);
			resolve();
		});
	}
}

module.exports = new ContactsRepository();
