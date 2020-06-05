import express from 'express';
import cors from 'cors';
import path from 'path';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/assets', express.static(path.resolve(__dirname, 'assets', 'svg')));
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

// {
// 	"name": "Mercado Tropeiro",
// 	"email": "placeholder@teste.com",
// 	"whatsapp": "11988889785",
// 	"latitude": -54.56423,
// 	"longitude": 23.54944,
// 	"uf": "SP",
// 	"city": "Sao Paulo",
// 	"items": [
// 		1,
// 		2,
// 		4
// 	]
// }
