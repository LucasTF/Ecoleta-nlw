import express from 'express';
import { celebrate, Joi } from 'celebrate';
import multer from 'multer';
import multerConfig from '../config/multer';

import ItemsController from '../controllers/ItemsController';
import CollectorsController from '../controllers/CollectorsController';

const routes = express.Router();
const upload = multer(multerConfig);

const itemsController = new ItemsController();
const collectorsController = new CollectorsController();

routes.get('/items', itemsController.index);
routes.get('/collectors', collectorsController.index);
routes.get('/collectors/:id', collectorsController.show);

routes.post(
	'/collectors',
	upload.single('image'),
	celebrate({
		body: Joi.object().keys({
			name: Joi.string().required(),
			email: Joi.string().required().email(),
			whatsapp: Joi.number().required(),
			latitude: Joi.number().required(),
			longitude: Joi.number().required(),
			uf: Joi.string().required().max(2),
			city: Joi.string().required(),
			items: Joi.string()
				.regex(/^[1-9](,[1-9])*$/)
				.required(),
		}),
	}),
	collectorsController.create
);

export default routes;
