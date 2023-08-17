import { Fieldset } from '@boston-scientific/anatomy-react';
import { InputCheckbox } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithHelp = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <Fieldset
          legend="Legend"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
        >
          <InputCheckbox label="Checkbox 1" />
          <InputCheckbox label="Checkbox 2" />
          <InputCheckbox label="Checkbox 3" />
        </Fieldset>
      </div>
    </Example>
  );
};

export default WithHelp;
