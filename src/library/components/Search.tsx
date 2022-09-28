import { ChangeEvent, FormEvent, ForwardedRef, forwardRef, InputHTMLAttributes, MutableRefObject, useEffect, useId, useRef, useState } from 'react';
import { RequireOnlyOne } from '../types';
import Button from './Button';
import IconClose from './icon/icons/IconClose';
import Link from './Link';
import StrongMatch from './StrongMatch';

interface Result {
  to?: string;
  href?: string;
  text: string;
}

export type SearchResult = RequireOnlyOne<Result, 'href' | 'to'>;
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isLabelVisible?: boolean;
  hasAutocomplete?: boolean;
  searchResults?: SearchResult[];
  texts?: {
    helpText?: string;
    buttonAriaLabel?: string;
    buttonText?: string;
    searchAriaLabel?: string;
    searchInputAriaLabel?: string;
    searchClearTextAriaLabel?: string;
  }
  onFormSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

const Search = forwardRef(({ label, isLabelVisible = false, hasAutocomplete = true, searchResults, texts, placeholder, onInvalid, onBlur, onChange, onFormSubmit, ...inputAttrs }: Props, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  const searchId = useId();

  const [value, setValue] = useState('');
  const [activeDescendant, setActiveDescendant] = useState<number>(0); // set to -1 to reset state

  const inputEl = useRef<HTMLInputElement>(null);
  const searchControlRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  const moveActiveDesc = (distance: number) => {
    if (searchControlRef.current?.contains(document.activeElement) && searchResults && value.length) {
      if (activeDescendant + distance > searchResults?.length - 1) {
        setActiveDescendant(0);
      } else if (activeDescendant + distance < 0) {
        setActiveDescendant(searchResults.length - 1);
      } else {
        setActiveDescendant(activeDescendant + distance)
      }
    }
  }

  const updateActiveDesc = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        moveActiveDesc(-1);
        break;

      case 'ArrowDown':
        e.preventDefault();
        moveActiveDesc(1);
        break;

      case 'Escape':
        e.preventDefault();
        setValue('');
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    setActiveDescendant(-1);
  }, [value]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (onFormSubmit) {
      onFormSubmit(e);
    }
  }

  return (
    <form className="bsds-form-search" role="search" aria-label={texts?.searchAriaLabel || "site search"} onSubmit={handleSubmit}>
      <div className="bsds-input">
        <label className="bsds-search">
          {isLabelVisible &&
            <div className="bsds-input-text-label">
              { label }
            </div>
          }
          <div className="bsds-search-control" onKeyDown={updateActiveDesc} ref={searchControlRef}>
            <div className="bsds-input-search">
              <input
                ref={node => {
                  if (node) {
                    (inputEl as MutableRefObject<HTMLInputElement>).current = node;
                    if (typeof ref === 'function') {
                      ref(node);
                    } else if (ref) {
                      (ref as MutableRefObject<HTMLInputElement>).current = node;
                    }
                  }
                }}
                type="search"
                className="bsds-input-text-input"
                placeholder={placeholder || 'Search'}
                value={value}
                role={hasAutocomplete ? 'combobox' : undefined}
                aria-label={texts?.searchInputAriaLabel || "search input"}
                aria-owns={hasAutocomplete ? searchId + '-results' : undefined}
                aria-controls={hasAutocomplete ? searchId + '-results' : undefined}
                aria-autocomplete={hasAutocomplete ? 'list' : undefined}
                aria-haspopup={hasAutocomplete ? 'listbox' : undefined}
                aria-expanded={hasAutocomplete && !!value}
                aria-describedby={texts?.helpText || ''}
                aria-activedescendant={activeDescendant >= 0 ? searchId + '-result-' + activeDescendant : undefined}
                onChange={handleChange}
                {...inputAttrs} />
              {/* TODO: consider pulling these into an action mixin */}
              {value &&
                <button
                  className="bsds-search-clear"
                  aria-label={texts?.searchClearTextAriaLabel || "clear search text"}
                  onClick={() => setValue('')}>
                  <IconClose className="bsds-icon-lg" />
                </button>
              }
              {(hasAutocomplete && searchResults) &&
                <ul id={searchId + '-results'} className="bsds-search-results" hidden={!value}>
                  {searchResults.map((result, i) => (
                    <li key={result.text + i} className={'bsds-search-result' + (i === activeDescendant ? ' active' : '')}>
                      <Link id={searchId + '-result-' + i} to={result.to} href={result.href} className="bsds-link-nav">
                        <StrongMatch match={value}>
                          {result.text}
                        </StrongMatch>
                      </Link>
                    </li>
                  ))}
                </ul>
              }
            </div>
            <Button variant="assertive" disabled={!value} aria-label={texts?.buttonAriaLabel || 'Search'}>
              {texts?.buttonText || 'Search'}
            </Button>
          </div>
        </label>
        {texts?.helpText && <p id={'inputHelpText' + searchId} className="bsds-input-help-text">{ texts?.helpText }</p>}
      </div>
    </form>
  );
});

export default Search;