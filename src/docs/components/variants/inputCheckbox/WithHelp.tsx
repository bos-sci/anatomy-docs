import { useState } from 'react';
import InputCheckbox from '../../../../library/components/InputCheckbox';
import Example from '../../../shared/components/Example';

const WithHelp = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState(true);

  return (
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
  );
};

export default WithHelp;
