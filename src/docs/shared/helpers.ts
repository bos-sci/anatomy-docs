import algoliasearch from 'algoliasearch';
import { SearchResult } from '../../library/components/Search';
import axios from 'axios';

export const slugify = (text: string): string => {
  return text
  .toString()
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^\w-]+/g, "")
  .replace(/--+/g, "-")
  .replace(/^-+/, "")
  .replace(/-+$/, "");
}

export const toCamelCase = (text: string): string => {
  return slugify(text).replace(/-([a-z])/g, (letter, index) => {
    return index === 0 ? letter[1].toLowerCase() : letter[1].toUpperCase();
  });
}

// Index search
const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ID!, process.env.REACT_APP_ALGOLIA_KEY!);
const index = searchClient.initIndex(process.env.REACT_APP_ALGOLIA_INDEX!);

type Result = SearchResult & {
  description?: string;
}

//Block search analytics by team IP
const teamIPs = [
  '165.225.57.60',
  '165.225.57.43',
  '165.225.57.38',
  '66.31.42.9',
  '96.237.115.225',
  '192.168.1.155',
  '192.168.1.6',
  '72.87.85.30'
];

export const indexSearch = async (query: string) => {

  const getIP = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    return (res.data.IPv4);
  }

  const ip = await getIP();

  const results = new Promise<Result[]>((resolve, reject) => {
    if (query) {
      index.search(query, {analytics: !teamIPs.includes(ip)}).then(({hits}) => {
        resolve(hits
          .filter((hit: any) => hit.title !== 'Anatomy - Boston Scientific')
          .filter((hit: any) => !hit.pathname.includes('/example/'))
          .map((hit: any) => ({
              to: hit.pathname,
              text: hit.title.replace(' - Anatomy - Boston Scientific', ''),
              description: hit.description
            })));
        }
      );
    }
  });

  return results;
}