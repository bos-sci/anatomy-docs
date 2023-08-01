import { useEffect, useState } from 'react';
import Search, { SearchResult } from 'library/components/Search';
import Example from 'docs/shared/components/Example';
import { useNavigate } from 'react-router-dom';

const data: SearchResult[] = [
  {
    text: 'Search result 1',
    to: 'docs-demo-link'
  },
  {
    text: 'Search result 2',
    to: 'docs-demo-link'
  },
  {
    text: 'Search result 3',
    to: 'docs-demo-link'
  }
];

const DefaultSearch = (): JSX.Element => {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setSearchResults(data.filter((d) => d.text.toLowerCase().includes(query.toLowerCase())));
  }, [query]);

  return (
    <Example>
      <Search
        label="Search"
        searchResults={searchResults}
        navigateToResult={(result) => navigate(result.to as string)}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Example>
  );
};

export default DefaultSearch;
