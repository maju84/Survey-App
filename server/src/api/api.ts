import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
  response.status(200).json({
    // eslint-disable-next-line quotes
    surveys: `http:/...`,
  });
});

router.options('/', (request, response) => {
  response.header('Allow', 'GET,OPTIONS');
  response.sendStatus(200);
});

export default router;
