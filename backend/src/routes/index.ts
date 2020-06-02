import express from 'express';

import ItemsController from '../controllers/ItemsController';
import CollectorsController from '../controllers/CollectorsController';

const routes = express.Router();
const itemsController = new ItemsController();
const collectorsController = new CollectorsController();

routes.get('/items', itemsController.index);
routes.get('/collectors', collectorsController.index);
routes.get('/collectors/:id', collectorsController.show);

routes.post('/collectors', collectorsController.create);

export default routes;
