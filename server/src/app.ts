import express from 'express';
import { apiRouter, URL_API } from './api/api';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(URL_API, apiRouter);

export default app;