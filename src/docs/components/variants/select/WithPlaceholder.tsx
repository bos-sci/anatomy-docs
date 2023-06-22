import { ChangeEvent, useState } from 'react';
import Select from '../../../../library/components/Select';
import SelectOption from '../../../../library/components/SelectOption';
import Example from '../../../shared/components/Example';

const WithPlaceholder = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <Select id="selectWithPlaceholder" label="Select" placeholder="Placeholder text" onChange={handleChange}>
          <SelectOption label="Option 1" value="Option 1" defaultChecked={inputValue === 'selectWithPlaceholder1'} />
          <SelectOption label="Option 2" value="Option 2" defaultChecked={inputValue === 'selectWithPlaceholder2'} />
          <SelectOption label="Option 3" value="Option 3" defaultChecked={inputValue === 'selectWithPlaceholder3'} />
        </Select>
      </div>
    </Example>
  );
};

export default WithPlaceholder;
