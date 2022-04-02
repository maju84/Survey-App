import dotenv from 'dotenv';
dotenv.config();

export const ENV_VAR = {
  NODE_ENV: process.env.NODE_ENV ?? 'dev',
  PORT: process.env.PORT ?? 3_000,
  MONGODB_URL: process.env.MONGODB_URL ?? 'mongodb://localhost:27017',
  MONGODB_DB_NAME: process.env.MONGODB_DB_NAME ?? 'survey-app-db',
};