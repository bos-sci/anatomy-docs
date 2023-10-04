import { Fieldset } from '@boston-scientific/anatomy-react';
import { InputCheckbox } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultInputCheckboxGroup = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <Fieldset legend="Legend">
          <InputCheckbox label="Checkbox 1" />
          <InputCheckbox label="Checkbox 2" />
          <InputCheckbox label="Checkbox 3" />
        </Fieldset>
      </div>
    </Example>
  );
};

export default DefaultInputCheckboxGroup;
