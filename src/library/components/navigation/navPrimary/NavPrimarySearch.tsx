import Search from '../../Search';
import { SearchResult } from '../../Search';

interface Props {
  labelText: string;
  buttonText: string;
  buttonAriaLabel: string;
  inputAriaLabel: string;
  isOpen: boolean;
  searchResults?: SearchResult[];
  onSearch?: (query: string) => void;
}

const NavPrimarySearch = (props: Props): JSX.Element => {

  const emitSearch = (query: string) => {
    if (props.onSearch) {
      props.onSearch(query);
    }
  }

  return (
    <div className={'bsds-search-panel' + (props.isOpen ? ' open' : '')}>
      <Search
        onChange={e => emitSearch(e.target.value)}
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