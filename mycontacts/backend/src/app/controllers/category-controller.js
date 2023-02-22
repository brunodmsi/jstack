const categoriesRepository = require('../repositories/categories-repository');

class CategoryController {
	async index(request, response) {
		const { orderBy } = request.query;
		const categories = await categoriesRepository.findAll(orderBy);

		return response.json(categories);
	}

	async show(request, response) {
		const { id } = request.params;
		const category = await categoriesRepository.findById(id);

		if (!category) {
			return response.status(404).json({ error: 'Category not found' });
		}

		return response.json(category);
	}

	async create(request, response) {
		const { name } = request.body;

		if (!name) {
			return response.status(400).json({ error: 'Name is required' });
		}

		const category = await categoriesRepository.create({
			name,
		});

		return response.json(category);
	}

	async update(request, response) {
		const { id } = request.params;
		const { name } = request.body;

		const categoryExists = await categoriesRepository.findById(id);

		if (!categoryExists) {
			return response.status(400).json({ error: 'Category not found' });
		}

		if (!name) {
			return response.status(400).json({ error: 'Name is required' });
		}

		const category = await categoriesRepository.update({
			name,
			id,
		});

		return response.json(category);
	}

	async delete(request, response) {
		const { id } = request.params;

		await categoriesRepository.delete(id);

		return response.sendStatus(204);
	}
}

// Singleton
module.exports = new CategoryController();
