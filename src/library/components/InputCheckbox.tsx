// TODO: look at how we handle ids

import { ChangeEvent, FocusEvent, InputHTMLAttributes, InvalidEvent, useCallback, useEffect, useRef, useState } from 'react';
import { getValidationMessage } from '../helpers/validation';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helpText?: string;
  errorText?: string;
  forceValidation?: boolean;
}

let checkboxId = 0;

const InputCheckbox = ({ label, helpText, errorText, forceValidation, onBlur, onChange, onInvalid, ...inputAttrs }: Props) => {

  const [inputId, setInputId] = useState('');
  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

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
    validate();
    if (onChange) {
      onChange(e);
    }
  }

  // Component mount
  useEffect(() => {
    const idNum = ++checkboxId;
    setInputId('checkbox' + idNum);
    setHelpTextId('checkboxHelpText' + idNum);
    setErrorTextId('checkboxErrorText' + idNum);
  }, []);

  useEffect(() => {
    if (forceValidation) {
      validate();
    }
  }, [forceValidation, validate]);

  return (
    <div className="ads-input">
      <div className="ads-input-checkbox">
        <input
          ref={inputEl}
          type="checkbox"
          id={inputId}
          className="ads-input-checkbox-input"
          onInvalid={handleInvalid}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={!!validationMessage}
          aria-describedby={`${validationMessage ? errorTextId : ''} ${helpText ? helpTextId : ''}`}
          formNoValidate
          {...inputAttrs} />
        <label htmlFor={inputId} className="ads-input-checkbox-label">{label}</label>
      </div>
      {validationMessage && <p id={errorTextId} className="ads-input-error">{ validationMessage }</p>}
      {helpText && <p id={helpTextId} className="ads-input-help-text">{ helpText }</p>}
    </div>
  );
}

export default InputCheckbox;