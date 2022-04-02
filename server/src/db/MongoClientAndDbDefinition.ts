import { Db, MongoClient } from 'mongodb';

export interface MongoClientAndDb {
  mongoClient: MongoClient,
  mongoDb: Db,
}
