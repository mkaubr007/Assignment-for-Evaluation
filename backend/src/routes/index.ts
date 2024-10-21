import express, { IRouter } from 'express';
const router = express.Router();

import userRoute from './user.route';
import adminRoute from './admin.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', new userRoute().getRoutes());
  router.use('/admin', new adminRoute().getRoutes());
  return router;
};

export default routes;
