import { Router } from 'express';

export const surveysRouter = Router();
export const URL_SURVEYS = "/surveys";

surveysRouter.post('/', (request, response) => {
  response.status(201).send(request.body);
});

