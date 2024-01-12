import { MongoClient } from 'mongodb';
import { Handler } from '@netlify/functions';
import { CarbonEntry } from '../../src/shared/types/docs';
const { default: axios } = require('axios');
const jsdom = require('jsdom');

/**
 * Query the website carbon api and return a CarbonEntry with date, url, carbon grams, and percent data.
 * @param url Anatomy docs page url
 * @param date Date string for the current date
 * @returns Promise<CarbonEntry>
 */
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
  } catch (error) {
    console.error(error);
    return {
      date,
      url,
      carbon: -1,
      percent: -1,
      error: {
        status: error.response.status,
        statusText: error.response.statusText
      }
    };
  }
}

/**
 * Gets the sitemap from the main branch in the anatomy-docs github
 * @returns Promise<string[]> A string of urls parsed from the sitemap
 */
async function parseSitemap(): Promise<string[] | null> {
  console.log('Parsing sitemap...');
  try {
    const res = await axios.get('https://raw.githubusercontent.com/bos-sci/anatomy-docs/main/public/sitemap.xml');
    const dom = new jsdom.JSDOM(res.data, { contentType: 'application/xml' });
    return Array.from(dom.window.document.querySelectorAll('loc'), (loc: Element) => loc.textContent || '');
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * Passes all the sitemap urls into the website carbon api
 * @returns Promise<CarbonEntry[]> Records to be written to DB
 */
async function collectData(): Promise<CarbonEntry[] | null> {
  console.log('Collecting data...');
  const date = new Date().toISOString();
  const urls = await parseSitemap();
  console.log('Sitemap parsed');
  if (urls) {
    const filteredUrls = urls.map((url) => url.replace(/\/$/m, ''));
    const promises = filteredUrls.map((url) => getCarbon(url, date));
    return Array.from(await Promise.all(promises));
  } else {
    return null;
  }
}

/**
 * Connects to MongoDB and inserts records
 * @returns Status code object
 */
const handler: Handler = async () => {
  const uri = process.env.MONGO_CONNECTION as string;
  const client = new MongoClient(uri);

  try {
    const database = client.db('carbon-metrics');
    const carbon = database.collection<CarbonEntry>('metrics');
    const carbonData = await collectData();
    console.log('Collected data');
    if (carbonData) {
      console.log('Inserting into DB...');
      const insertResult = await carbon.insertMany(carbonData);
      console.log(`Inserted ${insertResult.insertedCount} records into DB`);
      return {
        statusCode: 200
      };
    } else {
      return {
        statusCode: 500
      };
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500
    };
  } finally {
    await client.close();
  }
};

export { handler };
