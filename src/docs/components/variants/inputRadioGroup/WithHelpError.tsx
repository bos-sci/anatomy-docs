import { useState, ChangeEvent } from 'react';
import InputRadio from '../../../../library/components/InputRadio';
import RadioGroup from '../../../../library/components/RadioGroup';
import Example from '../../../shared/components/Example';

const WithHelpError = (): JSX.Element => {
  const error = 'This is an example of an error message.';
  const [selectedRadio, setSelectedRadio] = useState('groupHelpError1');
  const [errorText, setErrorText] = useState(error);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
    setErrorText(e.target.value === 'groupHelpError1' ? error : '');
  }

  return (
    <Example>
      <div className="ads-form-control">
        <RadioGroup
          legend="Legend"
          helpText="This is an example help text. It can wrap to two lines, but try not to go longer than three."
          errorText={errorText}>
          <InputRadio
            label="Radio 1"
            name="groupHelpError"
            value="groupHelpError1"
            onChange={handleChange}
            checked={selectedRadio === 'groupHelpError1'}
            forceValidation={true} />
          <InputRadio
            label="Radio 2"
            name="groupHelpError"
            value="groupHelpError2"
            helpText="This is an example help text. It can wrap to two lines, but try not to go longer than three."
            onChange={handleChange}
            checked={selectedRadio === 'groupHelpError2'} />
          <InputRadio
            label="Radio 3"
            name="groupHelpError"
            value="groupHelpError3"
            onChange={handleChange}
            checked={selectedRadio === 'groupHelpError3'} />
        </RadioGroup>
      </div>
    </Example>
  );
}

export default WithHelpError;