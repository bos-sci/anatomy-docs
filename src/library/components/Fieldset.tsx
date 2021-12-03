// TODO:
// - Revisit what to relate help and error text to
// - Handle aria-describedby id hookup internally depending on the outcome of the above TODO

import { FieldsetHTMLAttributes, ReactNode, useEffect, useState } from 'react';

interface Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  errorText?: string;
  errorTextId?: string; // Required if error text is provided
  helpText?: string;
  children: ReactNode;
}

let fieldsetId = 0;

const Fieldset = ({ legend, errorText, errorTextId, helpText, children, ...fieldsetAttrs }: Props) => {

  const [helpTextId, setHelpTextId] = useState('');

  useEffect(() => {
    const idNum = ++fieldsetId;
    setHelpTextId('checkboxHelpText' + idNum);
  }, []);

  return (
    <fieldset className="ads-fieldset" aria-describedby={helpTextId ? helpTextId : ''} {...fieldsetAttrs} >
      <legend className="ads-legend">{ legend }</legend>
      { errorText &&
        <p id={errorTextId} className="ads-input-error">{ errorText }</p>
      }
      { helpText &&
        <p id={helpTextId} className="ads-input-help-text">{ helpText }</p>
      }
      { children }
    </fieldset>
  );
}

export default Fieldset;