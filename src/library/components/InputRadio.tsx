// TODO: fix checkedness (on click focuses unchecked, on second click checks, on click of unchecked rechecks default checked)
// TODO: create RadioGroup component that includes fieldset, legend, name, default selection, invalid/required
// TODO: programmatically associate helpText with input (aria-describedby = uniqueHelpTextId)
// TODO: programmatically associate errors with input (aria-describedby = uniqueErrorMessageId)

import { ChangeEvent, useEffect, useState } from 'react';

interface Props {
  label: string;
  value?: string;
  helpText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any | void;
  [keys: string]: any; // Used to pass along native attribute to input
}

const InputRadio = ({ label, groupName, value = '', helpText, onChange, ...inputAttrs }: Props) => {

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
    <>
      <label className="ads-input-radio">
        <input type="radio" className="ads-input-radio-input" {...inputAttrs} value={ inputValue } onChange={ handleChange } />
        <div className="ads-input-radio-label">{ label }</div>
      </label>
      { helpText && <p className="ads-input-help-text">{ helpText }</p> }
    </>
  );
}

export default InputRadio;