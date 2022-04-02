import { Router } from 'express';
import { surveysRouter, URL_SURVEYS} from './surveys/surveys';

const apiRouter = Router();
const URL_API = "/api";

apiRouter.use(URL_SURVEYS, surveysRouter);

apiRouter.get('/', (req, res) => {
  res.status(200).json({
    // eslint-disable-next-line quotes
    surveys: `http://${req.headers.host}${URL_API}${URL_SURVEYS}`
  });
});

apiRouter.options('/', (request, response) => {
  response.header('Allow', 'GET,OPTIONS');
  response.sendStatus(200);
});

export {
  apiRouter,
  URL_API
};