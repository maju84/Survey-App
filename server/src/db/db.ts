import { Db, MongoClient } from 'mongodb';
import { ENV_VAR } from '../config';

const defaultDbName = ENV_VAR.MONGODB_DB_NAME;

export interface MongoClientAndDb {
  mongoClient: MongoClient,
  mongoDb: Db
}

let mongoClientAndDb: MongoClientAndDb;

export const getMongoDb = () => {
  return mongoClientAndDb?.mongoDb;
}


export const connectToDB = async ({ mongoDbUrl, databaseName=defaultDbName }: {
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
