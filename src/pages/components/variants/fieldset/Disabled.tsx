import { ChangeEvent, useState } from 'react';
import { Fieldset } from '@boston-scientific/anatomy-react';
import { InputText } from '@boston-scientific/anatomy-react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const Disabled = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <Fieldset legend="Legend" disabled>
        <div className="bsds-form-control">
          <InputText label="Related text input" value={inputValue} onChange={handleChange} />
        </div>
        <div className="bsds-form-control">
          <Textarea label="Related textarea" />
        </div>
      </Fieldset>
    </Example>
  );
};

export default Disabled;
