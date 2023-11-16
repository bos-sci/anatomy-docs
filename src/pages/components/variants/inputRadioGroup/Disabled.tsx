import { InputRadio } from '@boston-scientific/anatomy-react';
import { RadioGroup } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const Disabled = (): JSX.Element => {
  return (
    <>
      <Example>
        <RadioGroup legend="Disabled radio group" disabled>
          <InputRadio label="Radio 1" name="groupDisabled" value="defaultRadio1" defaultChecked />
          <InputRadio label="Radio 2" name="groupDisabled" value="defaultRadio2" />
          <InputRadio label="Radio 3" name="groupDisabled" value="defaultRadio3" />
        </RadioGroup>
      </Example>
      <Example>
        <RadioGroup legend="Disabled button style radio group" buttonGroup disabled>
          <InputRadio label="Radio 1" name="groupButtonStyleDisabled" value="groupButtonStyleDisabled1" checked />
          <InputRadio label="Radio 2" name="groupButtonStyleDisabled" value="groupButtonStyleDisabled2" />
          <InputRadio
            label="Radio 3"
            name="groupButtonStyleDisabled"
            value="groupButtonStyleDisabled3"
            inputUnavailable
          />
        </RadioGroup>
      </Example>
    </>
  );
};

export default Disabled;
