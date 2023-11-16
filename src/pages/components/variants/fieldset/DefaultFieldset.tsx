import { ChangeEvent, useState } from 'react';
import { Fieldset } from '@boston-scientific/anatomy-react';
import { InputText } from '@boston-scientific/anatomy-react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultFieldset = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <Fieldset legend="Legend">
        <InputText
          id="defaultFieldsetTextInput"
          label="Related text input"
          value={inputValue}
          onChange={handleChange}
        />

        <Textarea id="defaultFieldsetTextarea" label="Related textarea" />
      </Fieldset>
    </Example>
  );
};

export default DefaultFieldset;
