import { ChangeEvent, useState } from 'react';
import { Select } from '@boston-scientific/anatomy-react';
import { Option } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithHelpError = (): JSX.Element => {
  const errorMessage = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(errorMessage);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value.includes(' ')) {
      setErrorText(errorMessage);
    } else {
      setErrorText('');
    }
  };

  return (
    <Example>
      <Select
        id="selectWithHelpError"
        label="Select"
        helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
        errorText={errorText}
        forceValidation
        onChange={handleChange}
      >
        <Option value="" disabled selected />
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </Example>
  );
};

export default WithHelpError;
