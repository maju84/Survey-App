import { Router } from 'express';
import { save } from './surveys-repository';

const surveysRouter = Router();
const URL_SURVEYS = "/surveys";

surveysRouter.post('/', async (request, response) => {
  const result = await save({ survey: request.body });
  response.status(201).send(result);
});

export {
  surveysRouter,
  URL_SURVEYS,
};