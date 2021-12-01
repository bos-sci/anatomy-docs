import { ChangeEvent, useEffect, useState } from 'react';

interface Props {
  label: string;
  value?: string;
  helpText?: string;
  errorText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any | void;
  [keys: string]: any; // Used to pass along native attribute to input
}

let inputId = 0;

const InputText = ({ label, value = '', helpText, errorText, onChange, ...inputAttrs }: Props) => {

  const [inputValue, setInputValue] = useState('');
  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const idNum = ++inputId;
    setHelpTextId('inputHelpText' + idNum);
    setErrorTextId('inputErrorText' + idNum);
  }, []);

  return (
    <div className="ads-input">
      <label className="ads-input-text">
        <div className="ads-input-text-label">
          { label }
          { inputAttrs.required && <span className="ads-input-help-text">required</span> }
        </div>
        <input
          className="ads-input-text-input"
          value={inputValue}
          onChange={handleChange}
          aria-invalid={!!errorText}
          aria-describedby={`${errorText ? errorTextId : ''} ${helpText ? helpTextId : ''}`}
          {...inputAttrs} />
      </label>
      {errorText && <p id={errorTextId} className="ads-input-error">{ errorText }</p>}
      {helpText && <p id={helpTextId} className="ads-input-help-text">{ helpText }</p>}
    </div>
  );
}

export default InputText;