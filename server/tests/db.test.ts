import request from 'supertest';
import { ObjectId } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

import app from '../src/app';
import { connectToDB, MongoClientAndDb } from '../src/db/db';

import { SURVEYS_COLLECTION_NAME } from '../src/api/surveys/surveys-repository';
import { URL_API } from "../src/api/api";
import { URL_SURVEYS } from "../src/api/surveys/surveys";
import { ENV_VAR } from '../src/config';

const dbName = ENV_VAR.MONGODB_DB_NAME;

describe('backend e2e tests', () => {

  let mongoClientAndDb: MongoClientAndDb;
  let mongod: MongoMemoryServer;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
  
    const mongoDbUrl = mongod.getUri();
    mongoClientAndDb = await connectToDB({ mongoDbUrl, databaseName: dbName });
  });

  afterAll(async () => {
    await mongoClientAndDb.mongoDb.dropDatabase();
    await mongoClientAndDb.mongoClient.close();
    await mongod.stop();
  });

  afterEach(async () => {
    await mongoClientAndDb.mongoDb.dropCollection(SURVEYS_COLLECTION_NAME);
  });


  describe(`${URL_API}${URL_SURVEYS}/`, () => {

    test("POST should respond with a 201 and return id", async () => {
      const surveyData = {
        "question": "w00t?!",
        "answer-0": "first answer",
        "answer-2": "second answer"
      };
  
      const response = await request(app).post(`${URL_API}${URL_SURVEYS}/`).send(surveyData);

      
      expect(response.statusCode).toBe(201);
      expect(response.body.acknowledged).toBe(true);

      const insertedId = response.body.insertedId;
      expect(insertedId).toBeDefined;

      const data = await mongoClientAndDb.mongoDb.collection(SURVEYS_COLLECTION_NAME)
        .findOne({ _id: new ObjectId(insertedId) });
      expect(data).toBeDefined;     

    });  
  });

});