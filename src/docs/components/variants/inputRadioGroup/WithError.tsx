import { FormEvent } from 'react';
import Form from '../../../../library/components/Form';
import InputRadio from '../../../../library/components/InputRadio';
import RadioGroup from '../../../../library/components/RadioGroup';
import Example from '../../../shared/components/Example';

const WithError = (): JSX.Element => {
  const handleSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <Example>
      <Form onSubmit={handleSubmit}>
        <div className="bsds-form-control bsds-margin-top-remove">
          <RadioGroup legend="Legend">
            <InputRadio label="Radio 1" name="groupRequired" value="errorRequired1" required forceValidation={true} />
            <InputRadio label="Radio 2" name="groupRequired" value="errorRequired2" required />
          </RadioGroup>
        </div>
      </Form>
    </Example>
  );
};

export default WithError;
