import { InputRadio } from '@boston-scientific/anatomy-react';
import { RadioGroup } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithHelp = (): JSX.Element => {
  return (
    <Example>
      <RadioGroup
        legend="Legend"
        helpText="This is an example help text. It can wrap to two lines, but try not to go longer than three."
      >
        <InputRadio label="Radio 1" name="groupHelp" value="helpRadio1" />
        <InputRadio
          label="Radio 2"
          name="groupHelp"
          value="helpRadio2"
          helpText="This is an example help text. It can wrap to two lines, but try not to go longer than three."
          defaultChecked
        />
        <InputRadio label="Radio 3" name="groupHelp" value="helpRadio3" />
      </RadioGroup>
    </Example>
  );
};

export default WithHelp;
