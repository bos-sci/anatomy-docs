import { FormEvent } from 'react';
import { InputRadio } from '@boston-scientific/anatomy-react';
import { RadioGroup } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithError = (): JSX.Element => {
  const handleSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <Example>
      <RadioGroup legend="Legend" onSubmit={handleSubmit}>
        <InputRadio label="Radio 1" name="groupRequired" value="errorRequired1" forceValidation required />
        <InputRadio label="Radio 2" name="groupRequired" value="errorRequired2" required />
      </RadioGroup>
    </Example>
  );
};

export default WithError;
