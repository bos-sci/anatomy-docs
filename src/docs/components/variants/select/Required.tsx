import { ChangeEvent, useState } from 'react';
import Select from '../../../../library/components/Select';
import SelectOption from '../../../../library/components/SelectOption';
import Example from '../../../shared/components/Example';

const Required = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <Select id="selectRequired" label="Select" required onChange={handleChange}>
          <SelectOption label="Option 1" value="Option 1" defaultChecked={inputValue === 'selectRequired1'} />
          <SelectOption label="Option 2" value="Option 2" defaultChecked={inputValue === 'selectRequired2'} />
          <SelectOption label="Option 3" value="Option 3" defaultChecked={inputValue === 'selectRequired3'} />
        </Select>
      </div>
    </Example>
  );
};

export default Required;
