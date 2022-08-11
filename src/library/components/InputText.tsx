import { ChangeEvent, FocusEvent, ForwardedRef, forwardRef, InputHTMLAttributes, InvalidEvent, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { getValidationMessage } from '../helpers/validation';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helpText?: string;
  errorText?: string;
  requiredText?: string;
  forceValidation?: boolean;
}

let inputId = 0;

const InputText = forwardRef(({ label, helpText, errorText, requiredText = 'required', forceValidation = false, onInvalid, onBlur, onChange, ...inputAttrs }: Props, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [value, setValue] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  const inputEl = useRef<HTMLInputElement>(null);

  const validate = useCallback(() => {
    if (inputEl.current) {
      const isValid = inputEl.current.checkValidity();
      if (isValid) setValidationMessage('');
    }
  }, [inputEl]);

  const handleInvalid = (e: InvalidEvent<HTMLInputElement>) => {
    if (onInvalid) {
      onInvalid(e);
    }
    setValidationMessage(getValidationMessage(e.target));
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    validate();
    if (onBlur) {
      onBlur(e);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!isDirty) {
      setIsDirty(true);
    }
    if (onChange) {
      onChange(e);
    }
  }

  useEffect(() => {
    inputEl?.current?.setCustomValidity(errorText ? errorText : "");
  }, [inputEl, errorText]);

  // Sets input to dirty
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
    const idNum = ++inputId;
    setHelpTextId('inputHelpText' + idNum);
    setErrorTextId('inputErrorText' + idNum);
  }, []);

  return (
    <div className="bsds-input">
      <label className="bsds-input-text">
        <div className="bsds-input-text-label">
          { label }
          { inputAttrs.required && <span className="bsds-input-help-text">{ requiredText }</span> }
        </div>
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
          className="bsds-input-text-input"
          onInvalid={handleInvalid}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={!!validationMessage}
          aria-describedby={`${validationMessage ? errorTextId : ''} ${helpText ? helpTextId : ''}`}
          {...inputAttrs} />
      </label>
      {validationMessage && <p id={errorTextId} className="bsds-input-error">{ validationMessage }</p>}
      {helpText && <p id={helpTextId} className="bsds-input-help-text">{ helpText }</p>}
    </div>
  );
});

export default InputText;