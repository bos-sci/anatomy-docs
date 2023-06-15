import { ChangeEvent, useState } from 'react';
import Select from '../../../../library/components/Select';
import Example from '../../../shared/components/Example';

const DefaultSelect = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <Select id="selectDefault" label="Select" value={inputValue} onChange={handleChange} />
      </div>
    </Example>
  );
};

export default DefaultSelect;
