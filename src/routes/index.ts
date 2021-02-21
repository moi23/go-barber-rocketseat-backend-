import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

//sempre que o uso da rota for /appointments go to appointmentsRouter;
routes.use('/appointments', appointmentsRouter);

export default routes;
