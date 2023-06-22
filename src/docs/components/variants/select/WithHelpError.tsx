import { ChangeEvent, useState } from 'react';
import Select from '../../../../library/components/Select';
import SelectOption from '../../../../library/components/SelectOption';
import Example from '../../../shared/components/Example';

const WithHelpError = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <Select
          id="selectWithHelpError"
          label="Select"
          placeholder="Placeholder text"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
          forceValidation
          onChange={handleChange}
        >
          <SelectOption label="Option 1" value="Option 1" defaultChecked={inputValue === 'selectWithHelpError1'} />
          <SelectOption label="Option 2" value="Option 2" defaultChecked={inputValue === 'selectWithHelpError2'} />
          <SelectOption label="Option 3" value="Option 3" defaultChecked={inputValue === 'selectWithHelpError3'} />
        </Select>
      </div>
    </Example>
  );
};

export default WithHelpError;
