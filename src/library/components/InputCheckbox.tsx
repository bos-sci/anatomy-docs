import { ChangeEvent, useEffect, useState } from 'react';

interface Props {
  label: string;
  helpText?: string;
  errorText?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any | void;
  [keys: string]: any; // Used to pass along native attribute to input
}

let checkboxId = 0;

const InputCheckbox = ({ label, helpText, errorText, checked = false, onChange, ...inputAttrs }: Props) => {

  const [isChecked, setisChecked] = useState(checked);
  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setisChecked(!isChecked);
    if (onChange) {
      onChange(e);
    }
  }

  useEffect(() => {
    setisChecked(checked);
  }, [checked]);

  useEffect(() => {
    const idNum = ++checkboxId;
    setHelpTextId('checkboxHelpText' + idNum);
    setErrorTextId('checkboxErrorText' + idNum);
  }, []);

  return (
    <div className="ads-checkbox">
      <label className="ads-input-checkbox">
        <input
          type="checkbox"
          className="ads-input-checkbox-input"
          onChange={handleChange}
          checked={isChecked}
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