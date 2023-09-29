import { ChangeEvent, useState } from 'react';
import { Fieldset } from '@boston-scientific/anatomy-react';
import { InputText } from '@boston-scientific/anatomy-react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithError = (): JSX.Element => {
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
      <Fieldset legend="Fieldset" errorText={errorText}>
        <InputText label="Related text input" value={inputValue} onChange={handleChange} />
        <Textarea label="Related textarea" />
      </Fieldset>
    </Example>
  );
};

export default WithError;
