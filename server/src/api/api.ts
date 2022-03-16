import { Router } from 'express';
import { surveysRouter, URL_SURVEYS} from './surveys/surveys';

export const apiRouter = Router();
export const URL_API = "/api";

apiRouter.use(URL_SURVEYS, surveysRouter);

apiRouter.get('/', (request, response) => {
  response.status(200).json({
    // eslint-disable-next-line quotes
    surveys: `http://${request.headers.host}${URL_API}${URL_SURVEYS}`
  });
});

apiRouter.options('/', (request, response) => {
  response.header('Allow', 'GET,OPTIONS');
  response.sendStatus(200);
});
