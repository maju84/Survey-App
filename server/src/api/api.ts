import { Router } from 'express';
import { surveysRouter, URL_SURVEYS} from './surveys/surveys';

export const apiRouter = Router();
export const URL_API = "/api";

apiRouter.use(URL_SURVEYS, surveysRouter);

apiRouter.get('/', (request, response, next) => {
  response.status(200).json({
    // eslint-disable-next-line quotes
    surveys: `http:/...`,
  });
  next();
});

apiRouter.options('/', (request, response) => {
  response.header('Allow', 'GET,OPTIONS');
  response.sendStatus(200);
});
