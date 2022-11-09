import algoliasearch from 'algoliasearch';
import { SearchResult } from '../../library/components/Search';

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