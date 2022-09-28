import { FormEvent, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Link from '../../library/components/Link';
import Search, { SearchResult } from '../../library/components/Search';
import Layout, { SearchIndexContext } from '../shared/components/Layout';
import PageTemplate from '../shared/components/PageTemplate';
import './SearchResults.scss';

type Result = SearchResult & {
  description?: string;
}

const SearchResults = (): JSX.Element => {
  const location = useLocation();
  const searchIndex = useContext(SearchIndexContext);

  const [value, setValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHits, setSearchHits] = useState<any>('');
  const [searchResults, setSearchResults] = useState<Result[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query') || '';
    setSearchQuery(query);
    setValue(query);
  }, [location.search]);

  useEffect(() => {
    searchIndex.search(searchQuery).then(({hits}) => {
      setSearchHits(hits);
    });
  }, [searchIndex, searchQuery]);

  useEffect(() => {
    if (searchHits.length > 0) {
      setSearchResults(searchHits.filter((hit: any) => hit.title !== 'Anatomy - Boston Scientific').map((hit: any) => (
        {
          to: hit.pathname,
          text: hit.title.replace(' - Anatomy - Boston Scientific', ''),
          description: hit.description
        })
      ));
    }
  }, [searchHits]);

  const updateQuery = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(value);
  }

  return (
    <Layout>
      <PageTemplate
        name="Search results"
        seoMetaDescription={''}>
        <div className="docs-search-results-page">
          <Search label="Search" value={value} hasAutocomplete={false} onChange={e => setValue(e.target.value)} onFormSubmit={updateQuery} />
          <p className="bsds-body-subtle">We found <strong>{searchResults.length}</strong> results for your search.</p>
          <ul className="docs-search-results" hidden={!searchQuery}>
            {searchResults.map((result, i) => (
              <li key={result.text + i} className="docs-search-result">
                <Link to={result.to} className="bsds-body-assertive">{result.text}</Link>
                <p>{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </PageTemplate>
    </Layout>
  );
}

export default SearchResults;