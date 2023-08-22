import { Select } from '@boston-scientific/anatomy-react';
import { Option } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultSelect = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <Select id="optionDefault" label="Select">
          <Option value="" disabled selected />
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      </div>
    </Example>
  );
};

export default DefaultSelect;
