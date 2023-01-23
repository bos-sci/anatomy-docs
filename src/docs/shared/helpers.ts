import algoliasearch from 'algoliasearch';
import { SearchResult } from '../../library/components/Search';
import { releaseDate } from '../../utils/release-date';

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

export const indexSearch = (query: string) => {
  const results = new Promise<Result[]>((resolve, reject) => {
    if (query) {
      index.search(query).then(({hits}) => {
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

// Stores data in local storage with option to add a TTL. TTL can either "release" or a number (in days). Setting
// to release will have the data expire when a new release is pushed.
export const setStorage = (key: string, value: string, ttl: 'release' | number) => {
  const data = {
    value: value,
    ttl: ttl === 'release' ? releaseDate : Date.now() + (ttl * 8.64e7)
  }
  localStorage.setItem(key, JSON.stringify(data));
}

export const getStorage = (key: string) => {
  const raw = localStorage.getItem(key);
  if (raw) {
    const data = JSON.parse(raw);
    if (data.ttl && typeof data.ttl === 'string' && process.env.NODE_ENV === 'production') {
      if (releaseDate > new Date(data.ttl)) {
        localStorage.removeItem(key);
        return null;
      }
      return data.value;
    } else if (data.ttl) {
      if (Date.now() >= data.ttl) {
        localStorage.removeItem(key);
        return null;
      }
      return data.value;
    }
    return data;
  }
}