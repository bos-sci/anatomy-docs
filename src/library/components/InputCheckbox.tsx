import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helpText?: string;
  errorText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any | void;
}

let checkboxId = 0;

const InputCheckbox = ({ label, helpText, errorText, onChange, ...inputAttrs }: Props) => {

  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  }

  useEffect(() => {
    const idNum = ++checkboxId;
    setHelpTextId('checkboxHelpText' + idNum);
    setErrorTextId('checkboxErrorText' + idNum);
  }, []);

  return (
    <div className="ads-input">
      <label className="ads-input-checkbox">
        <input
          type="checkbox"
          className="ads-input-checkbox-input"
          onChange={handleChange}
          aria-invalid={!!errorText}
          aria-describedby={`${errorText ? errorTextId : ''} ${helpText ? helpTextId : ''}`}
          {...inputAttrs} />
        <div className="ads-input-checkbox-label">{label}</div>
      </label>
      {errorText && <p id={errorTextId} className="ads-input-error">{ errorText }</p>}
      {helpText && <p id={helpTextId} className="ads-input-help-text">{ helpText }</p>}
    </div>
  );
}

export default InputCheckbox;