import { InputCheckbox } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultInputCheckbox = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <InputCheckbox label="Checkbox" />
      </div>
    </Example>
  );
};

export default DefaultInputCheckbox;
