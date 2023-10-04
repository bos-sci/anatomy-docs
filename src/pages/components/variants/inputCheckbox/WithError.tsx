import { InputCheckbox } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithError = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <InputCheckbox label="Checkbox" forceValidation required />
      </div>
    </Example>
  );
};

export default WithError;
