import { createContext, FieldsetHTMLAttributes, useEffect, useState } from 'react';

export const RadioAddonPropsContext = createContext({
  ariaInvalid: false,
  ariaDescribedby: '',
  errorText: '',
  isDirty: false,
  setIsDirty: (isDirty: boolean) => {
    return;
  },
  setFieldsetError: (text: string) => {
    return;
  },
  buttonGroup: false,
  setButtonGroup: (buttonGroup: boolean) => {
    return;
  }
});

interface Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  errorText?: string;
  helpText?: string;
  buttonGroup?: boolean;
}

export interface AddonProps {
  ariaInvalid: boolean;
  ariaDescribedby: string;
  errorText: string;
  isDirty: boolean;
  setIsDirty: (isDirty: boolean) => void;
  setFieldsetError: (text: string) => void;
  buttonGroup: boolean;
  setButtonGroup: (buttonGroup: boolean) => void;
}

let radioGroupId = 0;

const RadioGroup = ({
  legend,
  errorText = '',
  helpText,
  buttonGroup,
  children,
  ...fieldsetAttrs
}: Props): JSX.Element => {
  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [addonProps, setAddonProps] = useState<AddonProps>({} as AddonProps);
  const [isInvalid, setIsInvalid] = useState(!!errorText);
  const [areRadiosDirty, setAreRadiosDirty] = useState(!!errorText);
  const [buttonGroupStyle, setButtonGroupStyle] = useState(!!buttonGroup);

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
      buttonGroup: buttonGroupStyle,
      setButtonGroup: (buttonGroup: boolean) => {
        setButtonGroupStyle(buttonGroup);
      }
    });
  }, [isInvalid, errorTextId, errorText, areRadiosDirty, buttonGroupStyle]);

  useEffect(() => {
    const idNum = ++radioGroupId;
    setHelpTextId('radioGroupHelpText' + idNum);
    setErrorTextId('radioGroupErrorText' + idNum);
  }, []);

  let radioGroupStyles = {
    fieldsetClass: 'bsds-fieldset',
    legendClass: 'bsds-legend',
    inputErrorClass: 'bsds-input-error',
    inputHelpText: 'bsds-input-help-text'
  };

  const buttonGroupStyles = {
    fieldsetClass: 'bsds-fieldset-button-group',
    legendClass: 'bsds-legend-button-group',
    inputErrorClass: 'bsds-input-error',
    inputHelpText: 'bsds-input-help-text'
  };

  if (buttonGroup) {
    radioGroupStyles = { ...buttonGroupStyles };
  }

  return (
    <fieldset
      className={radioGroupStyles.fieldsetClass}
      aria-describedby={helpTextId ? helpTextId : ''}
      {...fieldsetAttrs}
      role="radiogroup"
      aria-invalid={!!addonProps.ariaInvalid && addonProps.isDirty}
    >
      <legend className={radioGroupStyles.legendClass}>{legend}</legend>
      {!!validationMessage && (
        <p id={errorTextId} className={radioGroupStyles.inputErrorClass}>
          {validationMessage}
        </p>
      )}
      {!!helpText && (
        <p id={helpTextId} className={radioGroupStyles.inputHelpText}>
          {helpText}
        </p>
      )}
      <RadioAddonPropsContext.Provider value={addonProps}>{children}</RadioAddonPropsContext.Provider>
    </fieldset>
  );
};

export default RadioGroup;
