import { ChangeEvent, FocusEvent, InputHTMLAttributes, InvalidEvent, useCallback, useEffect, useRef, useState } from 'react';
import { getValidationMessage } from '../helpers/validation';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helpText?: string;
  errorText?: string;
  requiredText?: string;
  forceInvalid?: boolean;
}

let inputId = 0;

const InputText = ({ label, helpText, errorText, requiredText = 'required', forceInvalid, onInvalid, onBlur, onChange, ...inputAttrs }: Props) => {

  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [value, setValue] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  const inputEl = useRef<HTMLInputElement>(null);

  const validate = useCallback(() => {
    if (inputEl.current) {
      inputEl.current.setCustomValidity(errorText ? errorText : '');
      const isValid = inputEl.current.checkValidity();
      if (isValid) setValidationMessage('');
    }
  }, [errorText, inputEl]);

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

  // Sets input to dirty
  useEffect(() => {
    if (forceInvalid && !isDirty) {
      validate();
    } else if (isDirty || forceInvalid) {
      const whenDone = setTimeout(() => {
        validate();
      }, 1000);
      return () => clearTimeout(whenDone);
    }
  }, [value, isDirty, validate, forceInvalid]);

  // On component mount
  useEffect(() => {
    const idNum = ++inputId;
    setHelpTextId('inputHelpText' + idNum);
    setErrorTextId('inputErrorText' + idNum);

    if (inputEl?.current?.defaultValue) {
      setIsDirty(true);
    }
  }, []);

  return (
    <div className="ads-input">
      <label className="ads-input-text">
        <div className="ads-input-text-label">
          { label }
          { inputAttrs.required && <span className="ads-input-help-text">{ requiredText }</span> }
        </div>
        <input
          ref={inputEl}
          className="ads-input-text-input"
          onInvalid={handleInvalid}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={!!validationMessage}
          aria-describedby={`${validationMessage ? errorTextId : ''} ${helpText ? helpTextId : ''}`}
          formNoValidate
          {...inputAttrs} />
      </label>
      {validationMessage && <p id={errorTextId} className="ads-input-error">{ validationMessage }</p>}
      {helpText && <p id={helpTextId} className="ads-input-help-text">{ helpText }</p>}
    </div>
  );
}

export default InputText;