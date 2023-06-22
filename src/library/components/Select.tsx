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
import { errorValueMissing } from '../helpers/validation';

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
        if (selectEl.current.selectedOptions[0].disabled) {
          setValidationMessage(errorValueMissing);
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

    // TODO: ADS-500 revisit classNames
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
              name={label}
              className="bsds-input-text-input-select-control"
              aria-invalid={!!validationMessage}
              aria-describedby={`${validationMessage ? errorTextId : ''} ${helpText ? helpTextId : ''}`}
              onBlur={handleBlur}
              onChange={handleChange}
              {...selectAttrs}
            >
              <SelectOptionAddonPropsContext.Provider value={addonProps}>
                {children}
              </SelectOptionAddonPropsContext.Provider>
            </select>
          </div>
        </label>
        {!!validationMessage && (
          <p id={errorTextId} className="bsds-input-error">
            {validationMessage}
          </p>
        )}
        {!!helpText && (
          <p id={helpTextId} className="bsds-input-help-text">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;
