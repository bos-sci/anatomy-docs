import { InputCheckbox } from '@boston-scientific/anatomy-react';
import { Fieldset } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const Disabled = (): JSX.Element => {
  return (
    <>
      <Example>
        <div className="bsds-form-control">
          <InputCheckbox label="Disabled checkbox" disabled />
        </div>
        <div className="bsds-form-control">
          <InputCheckbox label="Disabled checked checkbox" disabled defaultChecked />
        </div>
      </Example>
      <Example>
        <Fieldset legend="Disabled checkbox group" disabled>
          <InputCheckbox label="Checkbox 1" defaultChecked />
          <InputCheckbox label="Checkbox 2" />
          <InputCheckbox label="Checkbox 3" />
        </Fieldset>
      </Example>
    </>
  );
};

export default Disabled;
