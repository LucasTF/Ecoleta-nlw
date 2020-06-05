import { Request, Response } from 'express';

import knex from '../database/connection';
import { IP_ADDRESS } from '../environment';

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

		const serializedCollectors = collectors.map(collector => {
			return {
				...collector,
				image_url: `http://${IP_ADDRESS}:3333/uploads/${collector.image}`,
			};
		});

		return response.json(serializedCollectors);
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

		const serializedCollector = {
			...collector,
			image_url: `http://${IP_ADDRESS}:3333/uploads/${collector.image}`,
		};

		return response.json({ collector: serializedCollector, items });
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
			image: request.file.filename,
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

		const collectorItems = items
			.split(',')
			.map((item: string) => Number(item.trim()))
			.map((item_id: number) => {
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
