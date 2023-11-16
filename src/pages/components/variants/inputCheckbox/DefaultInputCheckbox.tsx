import { InputCheckbox } from '@boston-scientific/anatomy-react';
import { Fieldset } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultInputCheckbox = (): JSX.Element => {
  return (
    <>
      <Example>
        <InputCheckbox label="Checkbox" />
      </Example>
      <Example>
        <Fieldset legend="Legend">
          <InputCheckbox label="Checkbox 1" />
          <InputCheckbox label="Checkbox 2" />
          <InputCheckbox label="Checkbox 3" />
        </Fieldset>
      </Example>
    </>
  );
};

export default DefaultInputCheckbox;
