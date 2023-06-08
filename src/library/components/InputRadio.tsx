import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  InvalidEvent,
  MutableRefObject,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { getValidationMessage } from '../helpers/validation';
import { AddonProps, RadioAddonPropsContext } from './RadioGroup';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  helpText?: string;
  forceValidation?: boolean;
  inputUnavailable?: boolean;
}

let radioId = 0;

const InputRadio = forwardRef(
  (
    { label, helpText, forceValidation, inputUnavailable, onBlur, onInput, onInvalid, ...inputAttrs }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const [inputId, setInputId] = useState('');
    const [helpTextId, setHelpTextId] = useState('');
    const [errorText, setErrorText] = useState('');
    const [isGroupStyle, setIsGroupStyle] = useState(false);
    const addonProps: AddonProps = useContext(RadioAddonPropsContext);

    const inputEl = useRef<HTMLInputElement>(null);

    const validate = useCallback(() => {
      if (inputEl.current) {
        const isValid = inputEl.current.checkValidity();
        if (isValid) {
          addonProps.setFieldsetError('');
        }
      }
    }, [inputEl, addonProps]);

    const handleInvalid = (e: InvalidEvent<HTMLInputElement>) => {
      addonProps.setFieldsetError(getValidationMessage(e.target));
      if (onInvalid) {
        onInvalid(e);
      }
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      addonProps.setIsDirty(true);
      if (onBlur) {
        onBlur(e);
      }
      validate();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      addonProps.setIsDirty(true);
      if (onInput) {
        onInput(e);
      }
      validate();
    };

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

    useEffect(() => {
      if (addonProps.buttonGroup) {
        setIsGroupStyle(addonProps.buttonGroup);
      }
    }, [isGroupStyle, addonProps]);

    let inputRadioStyles = {
      containerClass: 'bsds-input',
      radioContainerClass: 'bsds-input-radio',
      inputRadioClass: 'bsds-input-radio-input',
      labelClass: 'bsds-input-radio-label',
      inputHelptext: 'bsds-input-help-text'
    };

    const inputButtonGroupStyles = {
      containerClass: 'bsds-input-button-group',
      radioContainerClass: 'bsds-input-radio-button-group',
      inputRadioClass: 'bsds-input-radio-input',
      labelClass: 'bsds-input-radio-label-button-group',
      inputHelptext: 'bsds-input-help-text'
    };

    if (isGroupStyle) {
      inputRadioStyles = { ...inputButtonGroupStyles };
      if (inputUnavailable) {
        inputRadioStyles.labelClass = 'bsds-input-radio-label-button-group-unavailable';
      }
    }

    return (
      <div className={inputRadioStyles.containerClass}>
        <div className={inputRadioStyles.radioContainerClass}>
          <input
            ref={(node) => {
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
            className={inputRadioStyles.inputRadioClass}
            aria-describedby={`${helpTextId} ${addonProps.isDirty ? addonProps.ariaDescribedby : ''}`}
            onInvalid={handleInvalid}
            onBlur={handleBlur}
            onInput={handleChange}
            {...inputAttrs}
          />
          <label htmlFor={inputId} className={inputRadioStyles.labelClass}>
            {label}
          </label>
        </div>
        {!!helpText && (
          <p id={helpTextId} className={inputRadioStyles.inputHelptext}>
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

InputRadio.displayName = 'InputRadio';
export default InputRadio;
