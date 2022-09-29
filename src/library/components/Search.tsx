import { ChangeEvent, FormEvent, ForwardedRef, forwardRef, InputHTMLAttributes, MutableRefObject, useEffect, useId, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const Search = forwardRef(({ label, isLabelVisible = false, hasAutocomplete = true, searchResults, texts, placeholder, value, defaultValue, onInvalid, onBlur, onChange, onFormSubmit, ...inputAttrs }: Props, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  const navigate = useNavigate();

  const searchId = useId();

  const [inputValue, setInputValue] = useState('');
  const [activeDescendant, setActiveDescendant] = useState<number>(0); // set to -1 to reset state
  const [isDirty, setIsDirty] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const searchControlRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  const moveActiveDesc = (distance: number) => {
    if (searchControlRef.current?.contains(document.activeElement) && searchResults && inputValue.length) {
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
        setInputValue('');
        break;

      case 'Enter':
        e.preventDefault();
        // TODO: Using navigate() here makes react-router-dom (v6) a dependency of Anatomy.
        // Find another solution if we don't want that dependency.
        if(searchResults && inputValue) {
          if (searchResults[activeDescendant].to) {
            navigate(searchResults[activeDescendant].to as string);
          } else if (searchResults[activeDescendant].href) {
            navigate(searchResults[activeDescendant].href as string);
          }
        }
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    setActiveDescendant(-1);
  }, [inputValue]);

  useEffect(() => {
    if (defaultValue && !isDirty) {
      setInputValue(defaultValue as string);
    } else if (value) {
      setInputValue(value as string);
    }
  }, [value, defaultValue, isDirty]);

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
                    (inputRef as MutableRefObject<HTMLInputElement>).current = node;
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
                value={inputValue}
                name="query"
                role={hasAutocomplete ? 'combobox' : undefined}
                autoComplete="false"
                aria-label={texts?.searchInputAriaLabel || "search input"}
                aria-owns={hasAutocomplete ? searchId + '-results' : undefined}
                aria-controls={hasAutocomplete ? searchId + '-results' : undefined}
                aria-autocomplete={hasAutocomplete ? 'list' : undefined}
                aria-haspopup={hasAutocomplete ? 'listbox' : undefined}
                aria-expanded={hasAutocomplete && !!inputValue}
                aria-describedby={texts?.helpText || ''}
                aria-activedescendant={activeDescendant >= 0 ? searchId + '-result-' + activeDescendant : undefined}
                onChange={handleChange}
                {...inputAttrs} />
              {/* TODO: consider pulling these into an action mixin */}
              {inputValue &&
                <button
                  className="bsds-search-clear"
                  aria-label={texts?.searchClearTextAriaLabel || "clear search text"}
                  onClick={() => setInputValue('')}>
                  <IconClose className="bsds-icon-lg" />
                </button>
              }
              {(hasAutocomplete && searchResults) &&
                <ul id={searchId + '-results'} className="bsds-search-results" hidden={!inputValue}>
                  {searchResults.length > 0 && searchResults.map((result, i) => (
                    <li key={result.text + i} className="bsds-search-result">
                      <Link id={searchId + '-result-' + i} to={result.to} href={result.href} className={'bsds-link-nav' + (i === activeDescendant ? ' active-descendant' : '')}>
                        <StrongMatch match={inputValue}>
                          {result.text}
                        </StrongMatch>
                      </Link>
                    </li>
                  ))}
                  {searchResults.length === 0 && <li id={searchId + '-result-0'} className="bsds-search-result">No results found.</li>}
                </ul>
              }
            </div>
            <Button variant="assertive" disabled={!inputValue} aria-label={texts?.buttonAriaLabel || 'Search'}>
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