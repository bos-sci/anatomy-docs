import { InputCheckbox } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const Disabled = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <InputCheckbox label="Disabled checkbox" disabled />
      </div>
      <div className="bsds-form-control">
        <InputCheckbox label="Disabled checked checkbox" disabled defaultChecked />
      </div>
    </Example>
  );
};

export default Disabled;
