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

let radioId = 0;

const InputRadio = ({ label, groupName, value = '', helpText, onChange, ...inputAttrs }: Props) => {

  const [inputValue, setInputValue] = useState('');
  const [isChecked, setisChecked] = useState(false);
  const [helpTextId, setHelpTextId] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setisChecked(!isChecked);
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const idNum = ++radioId;
    setHelpTextId('radioHelpText' + idNum);
  }, []);

  return (
    <>
      <label className="ads-input-radio">
        <input
          type="radio"
          className="ads-input-radio-input"
          value={inputValue}
          onChange={handleChange}
          aria-describedby={helpTextId}
          {...inputAttrs} />
        <div className="ads-input-radio-label">{ label }</div>
      </label>
      { helpText && <p id={helpTextId} className="ads-input-help-text">{ helpText }</p> }
    </>
  );
}

export default InputRadio;