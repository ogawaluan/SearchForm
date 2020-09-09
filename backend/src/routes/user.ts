import { Router } from 'express';
import FormController from '../app/controllers/Form/FormController'
const routes = Router();

routes.get('/form', FormController.index)
routes.post('/form', FormController.store)
routes.get('/formShow', FormController.show)
export default routes;
