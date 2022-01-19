import { useState, ChangeEvent } from 'react';
import InputRadio from '../../../../library/components/InputRadio';
import RadioGroup from '../../../../library/components/RadioGroup';

const WithHelpAndErrorText = (): JSX.Element => {
  const error = 'Please select a different option.';
  const [selectedRadio, setSelectedRadio] = useState('groupHelpError1');
  const [errorText, setErrorText] = useState(error);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
    setErrorText(e.target.value === 'groupHelpError1' ? error : '');
  }

  return (
    <RadioGroup legend="Legend" helpText="Radio group help text is programmatically associated with the fieldset." errorText={errorText} >
      <InputRadio label="Radio 1" name="groupHelpError" value="groupHelpError1" onChange={handleChange} checked={selectedRadio === 'groupHelpError1'} forceValidation={true} />
      <InputRadio label="Radio 2" name="groupHelpError" value="groupHelpError2" helpText="Radio button help text is programmatically associated with one radio button in a radio group. It can wrap to two lines, but try not to go longer than three." onChange={handleChange} checked={selectedRadio === 'groupHelpError2'} />
      <InputRadio label="Radio 3" name="groupHelpError" value="groupHelpError3" onChange={handleChange} checked={selectedRadio === 'groupHelpError3'} />
    </RadioGroup>
  );
}

export default WithHelpAndErrorText;