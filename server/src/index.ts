import { flaschenpost } from 'flaschenpost';
import { app } from './app';
import { connectToDB } from './db/db';
import { ENV_VAR } from './config';

const logger = flaschenpost.getLogger();

const PORT = ENV_VAR.PORT;
const connectionString = ENV_VAR.MONGODB_URL;

connectToDB({ mongoDbUrl: connectionString }).then(() => {
  app.listen(PORT, () => {
    logger.info(`Listening on port: ${PORT}`);
  });
}).catch(error => {
  logger.error(error);
  process.exit();
});
