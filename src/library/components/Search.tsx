import { ChangeEvent, FormEvent, ForwardedRef, forwardRef, InputHTMLAttributes, MutableRefObject, useEffect, useRef, useState } from 'react';
import Button from './Button';
import IconClose from './icon/icons/IconClose';
import Link from './Link';
import StrongMatch from './StrongMatch';

export interface SearchResult {
  url: string;
  text: string;
}
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
    seachClearTextAriaLabel?: string;
  }
  onFormSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

let inputId = 0;

const Search = forwardRef(({ label, isLabelVisible = false, hasAutocomplete = true, searchResults, texts, placeholder, onInvalid, onBlur, onChange, onFormSubmit, ...inputAttrs }: Props, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  const [helpTextId, setHelpTextId] = useState('');
  const [value, setValue] = useState('');

  const inputEl = useRef<HTMLInputElement>(null);

  // On component mount
  useEffect(() => {
    const idNum = ++inputId;
    setHelpTextId('inputHelpText' + idNum);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

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
          <div className="bsds-search-control">
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
                aria-label={texts?.searchInputAriaLabel || "search input"}
                value={value}
                aria-describedby={texts?.helpText || ''}
                onChange={handleChange}
                {...inputAttrs} />
              {/* TODO: consider pulling these into an action mixin */}
              {value &&
                <button
                  className="bsds-search-clear"
                  aria-label={texts?.seachClearTextAriaLabel || "clear search text"}
                  onClick={() => setValue('')}>
                  <IconClose className="bsds-icon-lg" />
                </button>
              }
              {(hasAutocomplete && searchResults && value) &&
                <ul className="bsds-search-results">
                  {searchResults.map(result => (
                    <li key={result.url} className="bsds-search-result">
                      <Link to={result.url} className="bsds-link-nav">
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
        {texts?.helpText && <p id={helpTextId} className="bsds-input-help-text">{ texts?.helpText }</p>}
      </div>
    </form>
  );
});

export default Search;