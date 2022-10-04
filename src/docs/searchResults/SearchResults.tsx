import { FormEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Link from '../../library/components/Link';
import Search, { SearchResult } from '../../library/components/Search';
import Layout from '../shared/components/Layout';
import PageTemplate from '../shared/components/PageTemplate';
import { indexSearch } from '../shared/helpers';
import useTitle from '../shared/hooks/useTitle';

import './SearchResults.scss';

type Result = SearchResult & {
  description?: string;
}

const SearchResults = (): JSX.Element => {

  const location = useLocation();

  const [value, setValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Result[]>();

  useTitle({titlePrefix: `${searchQuery} - Search results`});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query') || '';
    setSearchQuery(query);
    setValue(query);
  }, [location.search]);

  useEffect(() => {
    indexSearch(searchQuery).then((results) => {
      setSearchResults(results);
    });
  }, [searchQuery]);

  const updateQuery = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(value);
  }

  return (
    <Layout>
      <PageTemplate
        name="Search results"
        seoMetaDescription={`Search results for ${searchQuery}`}>
        <div className="docs-search-results-page">
          <Search label="Search" value={value} hasAutocomplete={false} onChange={e => setValue(e.target.value)} onFormSubmit={updateQuery} />
          <p className="bsds-body-subtle">We found <strong>{searchResults?.length}</strong> results for your search.</p>
          {!searchResults && <p>Loading results...</p>}
          {(searchResults && searchResults.length > 0) &&
            <ul className="docs-search-results" hidden={!searchQuery}>
              {searchResults.map((result, i) => (
                <li key={result.text + i} className="docs-search-result">
                  <Link to={result.to} className="bsds-body-assertive">{result.text}</Link>
                  <p>{result.description}</p>
                </li>
              ))}
            </ul>
          }
        </div>
      </PageTemplate>
    </Layout>
  );
}

export default SearchResults;