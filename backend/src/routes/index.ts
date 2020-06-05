import express from 'express';
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

routes.post('/collectors', upload.single('image'), collectorsController.create);

export default routes;
