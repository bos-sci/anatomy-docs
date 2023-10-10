import { ChangeEvent, useState } from 'react';
import { Fieldset } from '@boston-scientific/anatomy-react';
import { InputText } from '@boston-scientific/anatomy-react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithHelpError = (): JSX.Element => {
  const errorMessage = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(errorMessage);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.includes(' ')) {
      setErrorText(errorMessage);
    } else {
      setErrorText('');
    }
  };

  return (
    <Example>
      <Fieldset
        legend="Legend"
        helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
        errorText={errorText}
      >
        <InputText label="Related text input" value={inputValue} onChange={handleChange} />
        <Textarea label="Related textarea" />
      </Fieldset>
    </Example>
  );
};

export default WithHelpError;
