import { RefObject } from 'react';
import { matchPath, resolvePath, Location } from 'react-router-dom';
import algoliasearch from 'algoliasearch';
import axios from 'axios';
import { SearchResult } from '@boston-scientific/anatomy-react';
import { NavNodePrimary } from '@boston-scientific/anatomy-react';
import { releaseDate } from 'utils/release-date';

export const ROOT_URL = 'https://www.anatomydesignsystem.com';

export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const toCamelCase = (text: string): string => {
  return slugify(text).replace(/-([a-z])/g, (letter, index) => {
    return index === 0 ? letter[1].toLowerCase() : letter[1].toUpperCase();
  });
};

export const toStorybookLink = (text: string): string => {
  return text.toLowerCase().replace(' ', '-');
};

// Index search
const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ID ?? '', process.env.REACT_APP_ALGOLIA_KEY ?? '');
const index = searchClient.initIndex(process.env.REACT_APP_ALGOLIA_INDEX ?? '');

type Result = SearchResult & {
  description?: string;
};

//Block search analytics by team IP
const teamIPs = [
  '165.225.57.60',
  '165.225.57.43',
  '165.225.57.38',
  '66.31.42.9',
  '71.233.188.227',
  '96.230.190.163',
  '72.87.85.30',
  '192.168.1.6',
  '146.115.148.218',
  '75.31.18.108',
  '96.237.59.87'
];

export const indexSearch = async (query: string) => {
  const getIP = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    return res.data.IPv4;
  };

  const ip = await getIP();

  interface Hit {
    title: string;
    pathname: string;
    description: string;
  }

  const results = new Promise<Result[]>((resolve, reject) => {
    if (query) {
      index.search(query, { analytics: !teamIPs.includes(ip) }).then(({ hits }) => {
        resolve(
          hits
            .filter((hit: unknown): hit is Hit => {
              if (typeof hit !== 'object' || hit === null) {
                return false;
              }
              return (hit as Hit).title !== 'Anatomy - Boston Scientific';
            })
            .filter((hit: unknown): hit is Hit => {
              if (typeof hit !== 'object' || hit === null) {
                return false;
              }
              return !(hit as Hit).pathname.includes('/example/');
            })
            .map((hit: unknown) => {
              const h = hit as Hit;
              return {
                to: h.pathname,
                text: h.title.replace(' - Anatomy - Boston Scientific', ''),
                description: h.description
              };
            })
        );
      });
    }
  });

  return results;
};

// Stores data in local storage with option to add a TTL. TTL can either be "release" or a number (in days). Setting
// to release will have the data expire when a new release is pushed.
export const setStorage = (key: string, value: string, ttl: 'release' | number) => {
  const data = {
    value: value,
    ttl: ttl === 'release' ? releaseDate : Date.now() + ttl * 8.64e7 // 8.64e7 is the number of ms in a day
  };
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStorage = (key: string) => {
  const raw = localStorage.getItem(key);
  if (raw) {
    const data = JSON.parse(raw);
    if (data.ttl && typeof data.ttl === 'string') {
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
};

// Primary Nav helpers

// Active function when using react-router
export const isActiveNode = (node: NavNodePrimary, ref: RefObject<HTMLAnchorElement>, location: Location) => {
  return !!matchPath(
    {
      path: resolvePath(node.to ? node.to : node.href || '', location.pathname).pathname,
      end: node.isExactMatch
    },
    location.pathname
  );
};
