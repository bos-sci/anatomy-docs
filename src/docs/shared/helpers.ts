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

// Index search
const searchClient = algoliasearch('R538RETIHH', '57937335fdbc8f462f7e8ad277b4ed00');
const index = searchClient.initIndex('netlify_61a5e8e4-0f4e-44c7-a2a2-1d9013d824e5_feature-ads-165_all');

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