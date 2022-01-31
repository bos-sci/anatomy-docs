/* eslint-disable jsx-a11y/role-supports-aria-props */
// TODO: look at how we handle ids

import { ChangeEvent, FocusEvent, ForwardedRef, forwardRef, InputHTMLAttributes, InvalidEvent, MutableRefObject, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { getValidationMessage } from '../helpers/validation';
import { AddonProps, RadioAddonPropsContext } from './RadioGroup';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  helpText?: string;
  forceValidation?: boolean;
}

let radioId = 0;

const InputRadio = forwardRef(({ label, helpText, forceValidation, onBlur, onInput, onInvalid, ...inputAttrs }: Props, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  const [inputId, setInputId] = useState('');
  const [helpTextId, setHelpTextId] = useState('');
  const [errorText, setErrorText] = useState('');
  const addonProps: AddonProps = useContext(RadioAddonPropsContext);

  const inputEl = useRef<HTMLInputElement>(null);

  const validate = useCallback(() => {
    if (inputEl.current) {
      const isValid = inputEl.current.checkValidity();
      if (isValid) addonProps.setFieldsetError('');
    }
  }, [inputEl, addonProps]);

  const handleInvalid = (e: InvalidEvent<HTMLInputElement>) => {
    addonProps.setFieldsetError(getValidationMessage(e.target));
    if (onInvalid) {
      onInvalid(e);
    }
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    addonProps.setIsDirty(true);
    if (onBlur) {
      onBlur(e);
    }
    validate();
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    addonProps.setIsDirty(true);
    if (onInput) {
      onInput(e);
    }
    validate();
  }

  useEffect(() => {
    if (addonProps.isDirty) {
      setErrorText(addonProps.errorText);
    }
  }, [validate, addonProps]);

  useEffect(() => {
    if (forceValidation && addonProps.setIsDirty) {
      addonProps.setIsDirty(true);
      validate();
    }
  }, [forceValidation, validate, addonProps]);

  useEffect(() => {
    inputEl?.current?.setCustomValidity(errorText ? errorText : '');
  }, [inputEl, errorText]);

  useEffect(() => {
    const idNum = ++radioId;
    setInputId('radio' + idNum);
    setHelpTextId('radioHelpText' + idNum);
  }, []);

  return (
    <div className="ads-input">
      <div className="ads-input-radio">
        <input
          ref={node => {
            if (node) {
              (inputEl as MutableRefObject<HTMLInputElement>).current = node;
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                (ref as MutableRefObject<HTMLInputElement>).current = node;
              }
            }
          }}
          type="radio"
          id={inputId}
          className="ads-input-radio-input"
          onInvalid={handleInvalid}
          onBlur={handleBlur}
          onInput={handleChange}
          aria-describedby={`${helpTextId} ${addonProps.isDirty ? addonProps.ariaDescribedby : ''}`}
          aria-invalid={addonProps.ariaInvalid && addonProps.isDirty}
          {...inputAttrs} />
        <label htmlFor={inputId} className="ads-input-radio-label">{ label }</label>
      </div>
      { helpText && <p id={helpTextId} className="ads-input-help-text">{ helpText }</p> }
    </div>
  );
});

export default InputRadio;