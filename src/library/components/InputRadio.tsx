// TODO: look at how we handle ids

import { ChangeEvent, FocusEvent, InputHTMLAttributes, InvalidEvent, useCallback, useEffect, useRef, useState } from 'react';
import { getValidationMessage } from '../helpers/validation';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  helpText?: string;
  forceValidation?: boolean;
  setFieldsetError?: (text: string) => void;
}

let radioId = 0;

const InputRadio = ({ label, helpText, forceValidation, setFieldsetError, onBlur, onChange, onInvalid, ...inputAttrs }: Props) => {

  const [inputId, setInputId] = useState('');
  const [helpTextId, setHelpTextId] = useState('');

  const inputEl = useRef<HTMLInputElement>(null);

  const validate = useCallback(() => {
    if (inputEl.current) {
      const isValid = inputEl.current.checkValidity();
      if (isValid && setFieldsetError) setFieldsetError('');
    }
  }, [inputEl, setFieldsetError]);

  const handleInvalid = (e: InvalidEvent<HTMLInputElement>) => {
    if (setFieldsetError) {
      setFieldsetError(getValidationMessage(e.target));
    }
    if (onInvalid) {
      onInvalid(e);
    }
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

  useEffect(() => {
    const idNum = ++radioId;
    setInputId('radio' + idNum);
    setHelpTextId('radioHelpText' + idNum);
  }, []);

  useEffect(() => {
    if (forceValidation) {
      validate();
    }
  }, [forceValidation, validate]);

  return (
    <div className="ads-input">
      <div className="ads-input-radio">
        <input
          ref={inputEl}
          type="radio"
          id={inputId}
          className="ads-input-radio-input"
          onInvalid={handleInvalid}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-describedby={helpTextId}
          formNoValidate
          {...inputAttrs} />
        <label htmlFor={inputId} className="ads-input-radio-label">{ label }</label>
      </div>
      { helpText && <p id={helpTextId} className="ads-input-help-text">{ helpText }</p> }
    </div>
  );
}

export default InputRadio;