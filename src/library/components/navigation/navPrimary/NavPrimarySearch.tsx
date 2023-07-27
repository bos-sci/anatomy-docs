import { ChangeEvent, FormEvent, useState } from 'react';
import Search from 'library/components/Search';
import { SearchResult } from 'library/components/Search';
import { Texts } from './NavPrimary';

interface Props {
  texts?: Texts;
  isExpanded: boolean;
  searchResults?: SearchResult[];
  onSearch?: (query: string, e: FormEvent<HTMLFormElement>) => void;
  onSearchChange?: (query: string, e: ChangeEvent<HTMLInputElement>) => void;
  navigateToResult: (result: SearchResult) => void;
}

const NavPrimarySearch = (props: Props): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');

  const emitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (props.onSearchChange) {
      props.onSearchChange(e.target.value, e);
    }
  };

  const emitSearch = (e: FormEvent<HTMLFormElement>) => {
    if (props.onSearch) {
      props.onSearch(searchValue, e);
    }
  };

  return (
    <div className={'bsds-search-panel' + (props.isExpanded ? ' is-expanded' : '')}>
      <Search
        label={props.texts?.searchLabel}
        texts={{
          buttonText: props.texts?.searchButtonText,
          buttonAriaLabel: props.texts?.searchButtonAriaLabel,
          searchAriaLabel: props.texts?.searchAriaLabel,
          searchInputAriaLabel: props.texts?.searchInputAriaLabel,
          searchClearTextAriaLabel: props.texts?.searchClearTextAriaLabel,
          noResultsFound: props.texts?.searchNoResults
        }}
        searchResults={props.searchResults}
        navigateToResult={props.navigateToResult}
        onChange={(e) => emitChange(e)}
        onFormSubmit={(e) => emitSearch(e)}
      />
    </div>
  );
};

export default NavPrimarySearch;
