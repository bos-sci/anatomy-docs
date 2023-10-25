import { useState } from 'react';
import { InputCheckbox } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';
import { Fieldset } from '@boston-scientific/anatomy-react';

const WithHelp = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Example>
        <div className="bsds-form-control">
          <InputCheckbox
            label="Checkbox"
            helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </div>
      </Example>
      <Example>
        <Fieldset
          legend="Legend"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
        >
          <InputCheckbox label="Checkbox 1" />
          <InputCheckbox label="Checkbox 2" />
          <InputCheckbox label="Checkbox 3" />
        </Fieldset>
      </Example>
    </>
  );
};

export default WithHelp;
