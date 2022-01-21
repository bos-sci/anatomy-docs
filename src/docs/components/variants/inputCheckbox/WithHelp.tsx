import { useState } from 'react';
import InputCheckbox from '../../../../library/components/InputCheckbox';

const WithHelp = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <InputCheckbox
      label="Checkbox"
      helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
      onChange={() => setIsChecked(!isChecked)}
      checked={isChecked} />
  );
}

export default WithHelp;