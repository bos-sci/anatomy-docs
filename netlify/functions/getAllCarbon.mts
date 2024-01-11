import { MongoClient } from 'mongodb';
import { CarbonRecord } from '../../src/shared/types/docs';

// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
  const uri = process.env.MONGO_CONNECTION as string;
  const client = new MongoClient(uri);
  try {
    const database = client.db('carbon-metrics');
    const carbon = database.collection<CarbonRecord>('metrics');
    const cursor = carbon.find().sort({ date: 1 });
    const allData = await cursor.toArray();
    return Response.json(allData);
  } catch (error) {
    return Response.json(error);
  } finally {
    client.close();
  }
};
