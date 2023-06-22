import {
  ChangeEvent,
  FocusEvent,
  SelectHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
  forwardRef,
  ForwardedRef,
  useId
} from 'react';
import { errorValueMissing } from '../helpers/validation';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  helpText?: string;
  errorText?: string;
  selectRequired?: string;
  forceValidation?: boolean;
}

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

    const [value, setValue] = useState('');
    const [isDirty, setIsDirty] = useState(false);

    const selectEl = useRef<HTMLSelectElement>(null);
    const selectId = 'inputHelpText' + useId();

    const validate = useCallback(() => {
      if (selectEl.current) {
        if (selectEl.current.selectedOptions[0].disabled && selectEl.current.required) {
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
      selectEl?.current?.setCustomValidity(errorText ?? '');
      selectEl.current?.checkValidity();
    }, [selectEl, validationMessage, errorText]);

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
      setHelpTextId('inputHelpText' + selectId);
      setErrorTextId('inputErrorText' + selectId);
    }, [selectId]);

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
              {children}
            </select>
          </div>
        </label>
        {!!validationMessage && (
          <p id={helpTextId} className="bsds-input-error">
            {validationMessage}
          </p>
        )}
        {!!helpText && (
          <p id={errorTextId} className="bsds-input-help-text">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;
