import { Select } from '@boston-scientific/anatomy-react';
import { Option } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithPlaceholder = (): JSX.Element => {
  return (
    <Example>
      <Select id="selectWithPlaceholder" label="Select">
        <Option value="" disabled selected>
          Placeholder text
        </Option>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </Example>
  );
};

export default WithPlaceholder;
