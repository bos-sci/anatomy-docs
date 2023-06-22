import {
  ChangeEvent,
  FocusEvent,
  SelectHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
  createContext,
  MutableRefObject,
  forwardRef,
  ForwardedRef
} from 'react';
import { valueMissingError } from '../helpers/validation';

export const SelectOptionAddonPropsContext = createContext({
  ariaInvalid: false,
  ariaDescribedby: '',
  errorText: '',
  isDirty: false,
  setIsDirty: (isDirty: boolean) => {
    return;
  },
  setFieldsetError: (text: string) => {
    return;
  }
});
interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  placeholder?: string;
  helpText?: string;
  errorText?: string;
  selectRequired?: string;
  forceValidation?: boolean;
}
export interface AddonProps extends SelectHTMLAttributes<HTMLSelectElement> {
  ariaInvalid: boolean;
  ariaDescribedby: string;
  errorText: string;
  validationMessage: string;
  isDirty: boolean;
  setIsDirty: (isDirty: boolean) => void;
  setFieldsetError: (text: string) => void;
}

let selectId = 0;

const Select = forwardRef(
  (
    {
      label,
      placeholder,
      helpText,
      errorText = '',
      selectRequired = 'required',
      forceValidation = false,
      children,
      onBlur,
      onChange,
      ...selectAttrs
    }: Props,
    ref: ForwardedRef<HTMLSelectElement>
  ): JSX.Element => {
    const [helpTextId, setHelpTextId] = useState('');
    const [errorTextId, setErrorTextId] = useState('');
    const [validationMessage, setValidationMessage] = useState('');
    const [addonProps, setAddonProps] = useState<AddonProps>({} as AddonProps);
    const [isInvalid, setIsInvalid] = useState(!!errorText);
    const [areOptionsDirty, setAreOptionsDirty] = useState(!!errorText);
    const [value, setValue] = useState('');
    const [isDirty, setIsDirty] = useState(false);

    const selectEl = useRef<HTMLSelectElement>(null);

    useEffect(() => {
      setAddonProps({
        errorText,
        validationMessage: validationMessage,
        ariaInvalid: isInvalid,
        ariaDescribedby: isInvalid ? errorTextId : '',
        isDirty: areOptionsDirty,
        setIsDirty: (isDirty: boolean) => {
          setAreOptionsDirty(isDirty);
        },
        setFieldsetError: (text) => {
          setValidationMessage(text);
          setIsInvalid(!!text);
        }
      });
    }, [isInvalid, errorTextId, errorText, validationMessage, areOptionsDirty]);

    const validate = useCallback(() => {
      if (selectEl.current) {
        if (selectEl.current.value === '') {
          setValidationMessage(valueMissingError);
        } else {
          setValidationMessage('');
        }
      }
    }, [selectEl]);

    const handleBlur = (e: FocusEvent<HTMLSelectElement>) => {
      validate();
      if (onBlur) {
        onBlur(e);
      }
    };

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
      if (!isDirty) {
        setIsDirty(true);
      }
      if (onChange) {
        onChange(e);
      }
    };

    useEffect(() => {
      selectEl?.current?.setCustomValidity(isInvalid ? errorText : '');
      selectEl.current?.checkValidity();
    }, [selectEl, isInvalid, errorText]);

    useEffect(() => {
      if (forceValidation && !isDirty) {
        validate();
      } else if (isDirty || forceValidation) {
        const whenDone = setTimeout(() => {
          validate();
        }, 1000);
        return () => clearTimeout(whenDone);
      }
    }, [value, isDirty, validate, forceValidation]);

    useEffect(() => {
      if (forceValidation) {
        validate();
      }
    }, [forceValidation, validate]);

    // On component mount
    useEffect(() => {
      const idNum = ++selectId;
      setHelpTextId('inputHelpText' + idNum);
      setErrorTextId('inputErrorText' + idNum);
    }, []);

    return (
      <div className="bsds-input">
        <label className="bsds-input-text">
          <div className="bsds-input-text-label">
            {label}
            {!!selectAttrs.required && <span className="bsds-input-help-text">{selectRequired}</span>}
          </div>
          <div className="bsds-input-text-input-select">
            <select
              ref={(node) => {
                if (node) {
                  (selectEl as MutableRefObject<HTMLSelectElement>).current = node;
                  if (typeof ref === 'function') {
                    ref(node);
                  } else if (ref) {
                    (ref as MutableRefObject<HTMLSelectElement>).current = node;
                  }
                }
              }}
              id={label}
              name={label}
              className="bsds-input-text-input-select-control"
              aria-invalid={!!validationMessage}
              aria-describedby={`${validationMessage ? errorTextId : ''} ${helpText ? helpTextId : ''}`}
              onBlur={handleBlur}
              onChange={handleChange}
              {...selectAttrs}
            >
              {!!placeholder && <option value="">{placeholder}</option>}
              <SelectOptionAddonPropsContext.Provider value={addonProps}>
                {children}
              </SelectOptionAddonPropsContext.Provider>
            </select>
          </div>
        </label>
        {!!helpText && (
          <p id={helpTextId} className="bsds-input-help-text">
            {helpText}
          </p>
        )}
        {!!validationMessage && (
          <p id={errorTextId} className="bsds-input-error">
            {validationMessage}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;
