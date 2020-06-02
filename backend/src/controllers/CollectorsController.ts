import { Request, Response } from 'express';

import knex from '../database/connection';

class CollectorsController {
	async index(request: Request, response: Response) {
		const { city, uf, items } = request.query;

		const parsedItems = String(items)
			.split(',')
			.map(item => Number(item.trim()));

		const collectors = await knex('collectors')
			.join(
				'collectors_items',
				'collectors.id',
				'=',
				'collectors_items.collector_id'
			)
			.whereIn('collectors_items.item_id', parsedItems)
			.where('city', String(city))
			.where('uf', String(uf))
			.distinct()
			.select('collectors.*');

		return response.json(collectors);
	}

	async show(request: Request, response: Response) {
		const { id } = request.params;

		const collector = await knex('collectors').where('id', id).first();
		if (!collector) {
			return response
				.status(400)
				.json({ message: 'Collector not found.' });
		}

		const items = await knex('items')
			.join(
				'collectors_items',
				'items.id',
				'=',
				'collectors_items.item_id'
			)
			.where('collectors_items.collector_id', id)
			.select('items.title');

		return response.json({ collector, items });
	}

	async create(request: Request, response: Response) {
		const {
			name,
			email,
			whatsapp,
			latitude,
			longitude,
			uf,
			city,
			items,
		} = request.body;

		const trx = await knex.transaction();

		const collector = {
			image:
				'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
			name,
			email,
			whatsapp,
			latitude,
			longitude,
			uf,
			city,
		};

		const insertedId = await trx('collectors')
			.returning('id')
			.insert(collector);

		const collector_id = insertedId[0];

		const collectorItems = items.map((item_id: number) => {
			return {
				collector_id,
				item_id,
			};
		});

		await trx('collectors_items').insert(collectorItems);

		await trx.commit();

		return response.json({
			id: collector_id,
			...collector,
		});
	}
}

export default CollectorsController;
