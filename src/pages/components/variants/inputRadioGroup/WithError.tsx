import { ChangeEvent, useState } from 'react';
import { InputRadio } from '@boston-scientific/anatomy-react';
import { RadioGroup } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithError = (): JSX.Element => {
  const error = 'This is an example of an error message.';
  const [selectedRadio, setSelectedRadio] = useState('groupError1');
  const [errorText, setErrorText] = useState(error);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
    setErrorText(e.target.value === 'groupError1' ? error : '');
  };

  return (
    <Example>
      <RadioGroup legend="Legend" errorText={errorText}>
        <InputRadio
          label="Radio 1"
          name="groupError"
          value="groupError1"
          checked={selectedRadio === 'groupError1'}
          forceValidation
          onChange={handleChange}
        />
        <InputRadio
          label="Radio 2"
          name="groupError"
          value="groupError2"
          helpText="This is an example help text. It can wrap to two lines, but try not to go longer than three."
          checked={selectedRadio === 'groupError2'}
          onChange={handleChange}
        />
        <InputRadio
          label="Radio 3"
          name="groupError"
          value="groupError3"
          checked={selectedRadio === 'groupError3'}
          onChange={handleChange}
        />
      </RadioGroup>
    </Example>
  );
};

export default WithError;
