import { useState } from 'react';
import InputCheckbox from '../../../../library/components/InputCheckbox';
import Example from '../../../shared/components/Example';

const WithHelp = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Example>
      <InputCheckbox
        label="Checkbox"
        helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked} />
    </Example>
  );
}

export default WithHelp;