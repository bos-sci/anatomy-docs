import { FormEvent } from 'react';
import { Form } from '@boston-scientific/anatomy-react';
import { InputRadio } from '@boston-scientific/anatomy-react';
import { RadioGroup } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithError = (): JSX.Element => {
  const handleSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <Example>
      <Form onSubmit={handleSubmit}>
        <div className="bsds-form-control bsds-margin-top-remove">
          <RadioGroup legend="Legend">
            <InputRadio label="Radio 1" name="groupRequired" value="errorRequired1" forceValidation required />
            <InputRadio label="Radio 2" name="groupRequired" value="errorRequired2" required />
          </RadioGroup>
        </div>
      </Form>
    </Example>
  );
};

export default WithError;
