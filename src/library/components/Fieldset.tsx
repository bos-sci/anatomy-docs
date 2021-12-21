// TODO:
// - Revisit what to relate help and error text to

import { FieldsetHTMLAttributes, useEffect, useState } from 'react';

interface Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  errorText?: string;
  helpText?: string;
}

let fieldsetId = 0;

const Fieldset = ({ legend, errorText, helpText, children, ...fieldsetAttrs }: Props): JSX.Element => {
  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');

  useEffect(() => {
    const idNum = ++fieldsetId;
    setHelpTextId('fieldsetHelpText' + idNum);
    setErrorTextId('fieldsetErrorText' + idNum);
  }, []);

  return (
    <fieldset className="ads-fieldset" aria-describedby={helpTextId ? helpTextId : ''} {...fieldsetAttrs} >
      <legend className="ads-legend">{ legend }</legend>
      { errorText && <p id={errorTextId} className="ads-input-error">{ errorText }</p> }
      { helpText && <p id={helpTextId} className="ads-input-help-text">{ helpText }</p> }
      { children }
    </fieldset>
  );
}

export default Fieldset;