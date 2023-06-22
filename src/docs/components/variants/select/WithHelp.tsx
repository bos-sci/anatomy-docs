import { ChangeEvent, useState } from 'react';
import Select from '../../../../library/components/Select';
import SelectOption from '../../../../library/components/SelectOption';
import Example from '../../../shared/components/Example';

const WithHelp = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <Select
          id="selectWithHelp"
          label="Select"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
          onChange={handleChange}
        >
          <SelectOption label="Option 1" value="Option 1" defaultChecked={inputValue === 'selectWithHelp1'} />
          <SelectOption label="Option 2" value="Option 2" defaultChecked={inputValue === 'selectWithHelp2'} />
          <SelectOption label="Option 3" value="Option 3" defaultChecked={inputValue === 'selectWithHelp3'} />
        </Select>
      </div>
    </Example>
  );
};

export default WithHelp;
