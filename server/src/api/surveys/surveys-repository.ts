import { getMongoDb } from '../../db/db';

const SURVEYS_COLLECTION_NAME = 'surveys'; // todo extract out into a constants.ts file?

const loadAll = async ({ collectionName = SURVEYS_COLLECTION_NAME } : {
  collectionName?: string
}) => {
  return await dbCollection(collectionName).find().toArray();
}

const save = async ({ survey, collectionName = SURVEYS_COLLECTION_NAME } : {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  survey: any,  // fixme
  collectionName?: string
}) => {
  return await dbCollection(collectionName).insertOne(survey);
}

const dbCollection = (collectionName: string) => {
  return getMongoDb().collection(collectionName);
}

export {
  SURVEYS_COLLECTION_NAME,
  loadAll,
  save
};
