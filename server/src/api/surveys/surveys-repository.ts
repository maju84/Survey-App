import { getMongoDb } from '../../db/db';

export const SURVEYS_COLLECTION_NAME = 'surveys'; // todo extract out into a constants.ts file?

export const loadAll = async ({ collectionName = SURVEYS_COLLECTION_NAME } : {
  collectionName?: string
}) => {
  return await dbCollection(collectionName).find().toArray();
}


export const save = async ({ survey, collectionName = SURVEYS_COLLECTION_NAME } : {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  survey: any,  // fixme
  collectionName?: string
}) => {
  return await dbCollection(collectionName).insertOne(survey);
}

const dbCollection = (collectionName: string) => {
  return getMongoDb().collection(collectionName);
}