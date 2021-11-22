import { ChangeEvent, useEffect, useState } from 'react';

interface Props {
  label: string;
  value?: string;
  helpText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any | void;
  [keys: string]: any; // Used to pass along native attribute to input
}

const InputText = ({ label, value = '', helpText, onChange, ...inputAttrs }: Props) => {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <label className="ads-input-text">
      <div className="ads-input-text-label">{ label }</div>
      {helpText && <p className="ads-input-text-helpText">{ helpText }</p>}
      <input className="ads-input-text-input" {...inputAttrs} value={inputValue} onChange={handleChange} />
    </label>
  );
}

export default InputText;