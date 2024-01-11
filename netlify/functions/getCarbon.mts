import { MongoClient } from 'mongodb';
import { CarbonRecord } from '../../src/shared/types/docs';
import { URL } from 'url';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: Request) => {
  // Build the search params object from query parameters
  const params = {};
  new URL(req.url).searchParams.forEach((value, key) => (params[key] = value));
  // Connect to MongoDB
  const uri = process.env.MONGO_CONNECTION as string;
  const client = new MongoClient(uri);
  try {
    const database = client.db('carbon-metrics');
    const carbon = database.collection<CarbonRecord>('metrics');
    const cursor = carbon.find(params).sort({ date: 1 }); // Sort date ascending
    const allData = await cursor.toArray();
    return Response.json(allData);
  } catch (error) {
    return Response.json(error);
  } finally {
    client.close();
  }
};
