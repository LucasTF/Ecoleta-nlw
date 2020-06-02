import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('collectors_items', table => {
		table.increments('id').primary();
		table
			.integer('collector_id')
			.notNullable()
			.references('id')
			.inTable('collectors');
		table
			.integer('item_id')
			.notNullable()
			.references('id')
			.inTable('items');
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable('collectors_items');
}
