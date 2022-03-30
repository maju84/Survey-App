import { Router } from 'express';
import { loadAll, save } from './surveys-repository';

export const surveysRouter = Router();
export const URL_SURVEYS = "/surveys";

surveysRouter.post('/', async (request, response) => {
  const result = await save({ survey: request.body });
  response.status(201).send(result);
});

