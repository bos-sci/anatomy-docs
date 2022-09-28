import { ChangeEvent, FormEvent, useState } from 'react';
import Search from '../../Search';
import { SearchResult } from '../../Search';

interface Props {
  labelText: string;
  buttonText: string;
  buttonAriaLabel: string;
  inputAriaLabel: string;
  isOpen: boolean;
  searchResults?: SearchResult[];
  onSearch?: (query: string, e: FormEvent<HTMLFormElement>) => void;
  onSearchChange?: (query: string, e: ChangeEvent<HTMLInputElement>) => void;
}

const NavPrimarySearch = (props: Props): JSX.Element => {

  const [searchValue, setSearchValue] = useState('');

  const emitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (props.onSearchChange) {
      props.onSearchChange(e.target.value, e);
    }
  }

  const emitSearch = (e: FormEvent<HTMLFormElement>) => {
    if (props.onSearch) {
      props.onSearch(searchValue, e);
    }
  }

  return (
    <div className={'bsds-search-panel' + (props.isOpen ? ' open' : '')}>
      <Search
        onChange={e => emitChange(e)}
        onFormSubmit={e => emitSearch(e)}
        label={props.labelText}
        searchResults={props.searchResults}
        texts={{
          buttonText: props.buttonText,
          buttonAriaLabel: props.buttonAriaLabel,
          searchAriaLabel: props.inputAriaLabel
        }}
      />
    </div>
  );
}

export default NavPrimarySearch;