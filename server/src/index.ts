import app from './app';
import { connectToDB } from './db/db';
import { ENV_VAR } from './config';

const PORT = ENV_VAR.PORT;
const connectionString = ENV_VAR.MONGODB_URL;

connectToDB({ mongoDbUrl: connectionString }).then(() => {
  app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
  });
}).catch(error => {
  console.error(error);
  process.exit();
});
