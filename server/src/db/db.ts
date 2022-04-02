import { MongoClient } from 'mongodb';
import { ENV_VAR } from '../config';
import { MongoClientAndDb } from './MongoClientAndDbDefinition';

const defaultDbName = ENV_VAR.MONGODB_DB_NAME;

let mongoClientAndDb: MongoClientAndDb;

const getMongoDb = () => {
  return mongoClientAndDb?.mongoDb;
}

const connectToDB = async ({ mongoDbUrl, databaseName=defaultDbName }: {
  mongoDbUrl: string,
  databaseName?: string
}): Promise<MongoClientAndDb> => {

  const client = new MongoClient(mongoDbUrl);

  try {
    // Connect the client to the server
    const mongoClient = await client.connect();

    // Establish and verify connection
    const mongoDb = mongoClient.db(databaseName);
    await mongoDb.command({ ping: 1 });
    console.log("Connected successfully to database.", databaseName);

    mongoClientAndDb = { mongoClient, mongoDb };
    return { mongoClient, mongoDb };

  } finally {

    // fixme
    // Ensures that the client will close when you finish/error
    // await client.close()
  }  
}

export {
  getMongoDb,
  connectToDB,
};