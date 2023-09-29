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
      <Fieldset legend="Fieldset">
        <div className="bsds-form-control">
          <InputText
            id="defaultFieldsetTextInput"
            label="Related text input"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
        <div className="bsds-form-control">
          <Textarea id="defaultFieldsetTextarea" label="Related textarea" />
        </div>
      </Fieldset>
    </Example>
  );
};

export default DefaultFieldset;
