import { MongoClient } from 'mongodb';
import { Handler } from '@netlify/functions';
import { CarbonEntry } from '../../src/shared/types/docs';
const { default: axios } = require('axios');
const jsdom = require('jsdom');
const fs = require('fs');
const path = require('path');

async function getCarbon(url: string, date: string): Promise<CarbonEntry> {
  const api = 'https://api.websitecarbon.com/b?url=';
  try {
    const res = await axios.get(api + url);
    return {
      date,
      url,
      carbon: res.data.c,
      percent: res.data.p
    };
  } catch (e) {
    console.error(e);
    return {
      date,
      url,
      carbon: -1,
      percent: -1,
      error: {
        status: e.response.status,
        statusText: e.response.statusText
      }
    };
  }
}

async function parseSitemap(): Promise<string[]> {
  console.log('Parsing sitemap...');
  const jsonPath = path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'sitemap.xml');
  const sitemap = fs.readFileSync(jsonPath, 'utf8');
  const dom = new jsdom.JSDOM(sitemap, { contentType: 'application/xml' });
  return Array.from(dom.window.document.querySelectorAll('loc'), (loc: Element) => loc.textContent || '');
}

async function collectData(): Promise<CarbonEntry[]> {
  console.log('Collecting data...');
  const date = new Date().toISOString();
  const urls = await parseSitemap();
  console.log('Sitemap parsed', urls);
  const filteredUrls = urls.map((url) => url.replace(/\/$/m, ''));
  const promises = filteredUrls.map((url) => getCarbon(url, date));
  return Array.from(await Promise.all(promises));
}

const handler: Handler = async () => {
  const uri = process.env.MONGO_CONNECTION as string;
  const client = new MongoClient(uri);

  try {
    const database = client.db('carbon-metrics');
    const carbon = database.collection<CarbonEntry>('metrics');
    const carbonData = await collectData();
    console.log('Collected data', carbonData);
    console.log('Inserting into DB...');
    await carbon.insertMany(carbonData);
    console.log('Inserted into DB');
    return {
      statusCode: 200
    };
  } catch (error) {
    return {
      statusCode: 500
    };
  } finally {
    await client.close();
  }
};

export { handler };
