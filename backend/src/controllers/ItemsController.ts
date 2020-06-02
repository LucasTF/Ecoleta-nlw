import { Request, Response } from 'express';

import knex from '../database/connection';

interface Item {
	id: number;
	title: string;
	image: string;
}

class ItemsController {
	async index(request: Request, response: Response) {
		const items: Item[] = await knex('items').select('*');

		const serializedItems = items.map((item: Item) => {
			return {
				id: item.id,
				title: item.title,
				imageUrl: `http://localhost:3333/assets/${item.image}`,
			};
		});

		return response.json(serializedItems);
	}
}

export default ItemsController;
