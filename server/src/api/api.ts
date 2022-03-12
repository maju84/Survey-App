import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
  response.status(200).json({
    // eslint-disable-next-line quotes
    surveys: `http:/...`,
  });
});

export default router;
