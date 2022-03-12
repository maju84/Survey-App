import express from 'express';

const app = express();
app.use(express.json());

app.get('/test', async (request, response) => {
  response.status(200).json({ smile: ":-)" });
});

export default app;