import { MongoClient } from 'mongodb';
import { CarbonRecord } from '../../src/shared/types/docs';
import { URL } from 'url';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: Request) => {
  const params = {};
  new URL(req.url).searchParams.forEach((value, key) => (params[key] = value));
  console.log(params);
  const uri = process.env.MONGO_CONNECTION as string;
  const client = new MongoClient(uri);
  try {
    const database = client.db('carbon-metrics');
    const carbon = database.collection<CarbonRecord>('metrics');
    const cursor = carbon.find(params).sort({ date: 1 });
    const allData = await cursor.toArray();
    return Response.json(allData);
  } catch (error) {
    return Response.json(error);
  } finally {
    client.close();
  }
};
