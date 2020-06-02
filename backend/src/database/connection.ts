import knex from 'knex';

import { CONN_STRING } from '../environment';

const conn = knex({
	client: 'pg',
	connection: CONN_STRING,
});

export default conn;
