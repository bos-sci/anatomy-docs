// TODO:
// - Revisit what to relate help and error text to

import { Children, cloneElement, FC, FieldsetHTMLAttributes, isValidElement, ReactElement, useEffect, useState } from 'react';

interface Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  errorText?: string;
  helpText?: string;
}

let fieldsetId = 0;

const Fieldset: FC<Props> = ({ legend, errorText, helpText, children, ...fieldsetAttrs }) => {

  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');
  const [childInputs, setChildInputs] = useState<ReactElement[]>([]);
  const [validationMessage, setValidationMessage] = useState('');
  const [hasNativeError, setHasNativeError] = useState(false);

  useEffect(() => {
    const childClones = Children.toArray(children).reduce((clones: ReactElement[], child) => {

      const addonAttrs: {
        'aria-invalid'?: boolean;
        'aria-describedby'?: string;
        setFieldsetError?: (text: string) => void;
      } = {};

      if (isValidElement(child)) {
        if (typeof child.type === 'function' && child.type.name === 'InputRadio') {
          addonAttrs.setFieldsetError = (text) => {
            setHasNativeError(!!text);
            setValidationMessage(text);
          }
        }

        // If child is a native or ADS form control
        const inputTypesNative = ['select', 'input', 'textarea'];
        const inputTypesFn = ['InputRadio', 'InputText'];
        if (
          (typeof child.type === 'function' && inputTypesFn.includes(child.type.name))
          || (typeof child.type === 'string' && inputTypesNative.includes(child.type))
        ) {
          if (validationMessage) {
            addonAttrs['aria-invalid'] = true;
            addonAttrs['aria-describedby'] = errorTextId;
          }
        }
        const clone = cloneElement(child , addonAttrs);
        clones.push(clone);
      }
      return clones;
    }, []);
    setChildInputs(childClones);
  }, [children, errorTextId, validationMessage]);

  useEffect(() => {
    if (errorText) {
      setValidationMessage(errorText);
    } else if (!hasNativeError) {
      setValidationMessage('');
    }
  }, [errorText, hasNativeError]);

  useEffect(() => {
    const idNum = ++fieldsetId;
    setHelpTextId('fieldsetHelpText' + idNum);
    setErrorTextId('fieldsetErrorText' + idNum);
  }, []);

  return (
    <fieldset className="ads-fieldset" aria-describedby={helpTextId ? helpTextId : ''} {...fieldsetAttrs} >
      <legend className="ads-legend">{ legend }</legend>
      { (errorText || validationMessage) &&
        <p id={errorTextId} className="ads-input-error">{ errorText || validationMessage }</p>
      }
      { helpText &&
        <p id={helpTextId} className="ads-input-help-text">{ helpText }</p>
      }
      { childInputs }
    </fieldset>
  );
}

export default Fieldset;