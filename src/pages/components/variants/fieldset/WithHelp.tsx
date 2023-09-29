import { ChangeEvent, useState } from 'react';
import { Fieldset } from '@boston-scientific/anatomy-react';
import { InputText } from '@boston-scientific/anatomy-react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithHelp = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <Fieldset
        legend="Fieldset"
        helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
      >
        <InputText label="Related text input" value={inputValue} onChange={handleChange} />
        <Textarea label="Related textarea" />
      </Fieldset>
    </Example>
  );
};

export default WithHelp;
