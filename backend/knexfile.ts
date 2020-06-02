import path from 'path';

import { CONN_STRING } from './src/environment';

module.exports = {
	client: 'pg',
	connection: CONN_STRING,
	migrations: {
		directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
	},
	seeds: {
		directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
	},
};
