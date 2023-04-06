import { createContext, FieldsetHTMLAttributes, useEffect, useState } from 'react';

export const RadioAddonPropsContext = createContext({
  ariaInvalid: false,
  ariaDescribedby: '',
  errorText: '',
  isDirty: false,
  setIsDirty: (isDirty: boolean) => {},
  setFieldsetError: (text: string) => {},
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

const RadioGroup = ({ legend, errorText = '', helpText, children, ...fieldsetAttrs }: Props): JSX.Element => {
  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [addonProps, setAddonProps] = useState<AddonProps>({} as AddonProps);
  const [isInvalid, setIsInvalid] = useState(!!errorText);
  const [areRadiosDirty, setAreRadiosDirty] = useState(!!errorText);

  useEffect(() => {
    setAddonProps({
      errorText,
      ariaInvalid: isInvalid,
      ariaDescribedby: isInvalid ? errorTextId : '',
      isDirty: areRadiosDirty,
      setIsDirty: (isDirty: boolean) => {
        setAreRadiosDirty(isDirty);
      },
      setFieldsetError: (text) => {
        setValidationMessage(text);
        setIsInvalid(!!text);
      },
    });
  }, [isInvalid, errorTextId, errorText, areRadiosDirty]);

  useEffect(() => {
    const idNum = ++radioGroupId;
    setHelpTextId('radioGroupHelpText' + idNum);
    setErrorTextId('radioGroupErrorText' + idNum);
  }, []);

  return (
    <fieldset
      className="bsds-fieldset"
      aria-describedby={helpTextId ? helpTextId : ''}
      {...fieldsetAttrs}
      role="radiogroup"
      aria-invalid={addonProps.ariaInvalid && addonProps.isDirty}
    >
      <legend className="bsds-legend">{legend}</legend>
      {validationMessage && (
        <p id={errorTextId} className="bsds-input-error">
          {validationMessage}
        </p>
      )}
      {helpText && (
        <p id={helpTextId} className="bsds-input-help-text">
          {helpText}
        </p>
      )}
      <RadioAddonPropsContext.Provider value={addonProps}>{children}</RadioAddonPropsContext.Provider>
    </fieldset>
  );
};

export default RadioGroup;
