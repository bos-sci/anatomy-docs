import { useState, ChangeEvent } from 'react';
import { InputRadio } from '@boston-scientific/anatomy-react';
import { RadioGroup } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithError = (): JSX.Element => {
  const errorMessage = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(errorMessage);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorText(e.target.checked === false ? errorMessage : '');
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <RadioGroup legend="Legend" errorText={errorText}>
          <InputRadio label="Radio 1" name="groupError" value="groupError1" forceValidation onChange={handleChange} />
          <InputRadio label="Radio 2" name="groupError" value="groupError2" forceValidation onChange={handleChange} />
        </RadioGroup>
      </div>
    </Example>
  );
};

export default WithError;
