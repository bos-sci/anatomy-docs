import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helpText?: string;
  errorText?: string;
  requiredText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any | void;
}

let inputId = 0;

const InputText = ({ label, helpText, errorText, requiredText = 'required', onChange, ...inputAttrs }: Props) => {

  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  }

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
          { inputAttrs.required && <span className="ads-input-help-text">{ requiredText }</span> }
        </div>
        <input
          className="ads-input-text-input"
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