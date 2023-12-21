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
        <InputText label="Related text input" className="bsds-mt-2x" value={inputValue} onChange={handleChange} />

        <Textarea label="Related textarea" className="bsds-mt-3x" />
      </Fieldset>
    </Example>
  );
};

export default Disabled;
