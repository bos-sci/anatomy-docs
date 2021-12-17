// TODO:
// - Revisit what to relate help and error text to

import { createContext, FC, FieldsetHTMLAttributes, useEffect, useState } from 'react';

export const InputRadioAddonPropsContext = createContext({
  ariaInvalid: false,
  ariaDescribedby: '',
  errorText: '',
  isDirty: false,
  setIsDirty: (isDirty: boolean) => {},
  setFieldsetError: (text: string) => {}
});

interface Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  errorText?: string;
  helpText?: string;
}

export interface AddonProps {
  ariaInvalid: boolean;
  ariaDescribedby: string;
  errorText: string;
  isDirty: boolean;
  setIsDirty: (isDirty: boolean) => void;
  setFieldsetError: (text: string) => void;
}

let radioGroupId = 0;

const InputRadioGroup: FC<Props> = ({ legend, errorText = '', helpText, children, ...fieldsetAttrs }) => {

  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [addonProps, setAddonProps] = useState<AddonProps>({} as AddonProps);
  const [isInvalid, setIsInvalid] = useState(false);
  const [areRadiosDirty, setAreRadiosDirty] = useState(false);

  useEffect(() => {
    setAddonProps({
      errorText: errorText,
      ariaInvalid: isInvalid,
      ariaDescribedby: isInvalid ? errorTextId : '',
      isDirty: areRadiosDirty,
      setIsDirty: (isDirty: boolean) => { setAreRadiosDirty(isDirty) },
      setFieldsetError: (text) => {
        setValidationMessage(text);
        setIsInvalid(!!text);
      }
    });
  }, [isInvalid, errorTextId, errorText, areRadiosDirty]);

  useEffect(() => {
    const idNum = ++radioGroupId;
    setHelpTextId('radioGroupHelpText' + idNum);
    setErrorTextId('radioGroupErrorText' + idNum);
  }, []);

  return (
    <fieldset className="ads-fieldset" aria-describedby={helpTextId ? helpTextId : ''} {...fieldsetAttrs} >
      <legend className="ads-legend">{ legend }</legend>
      { validationMessage &&
        <p id={errorTextId} className="ads-input-error">{ validationMessage }</p>
      }
      { helpText &&
        <p id={helpTextId} className="ads-input-help-text">{ helpText }</p>
      }
      <InputRadioAddonPropsContext.Provider value={addonProps}>
        { children }
      </InputRadioAddonPropsContext.Provider>
    </fieldset>
  );
}

export default InputRadioGroup;