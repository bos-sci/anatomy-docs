import { ChangeEvent, useState } from 'react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const TextareaWithManualResize = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <Textarea label="Textarea" value={inputValue} onChange={handleChange} />
      </div>
    </Example>
  );
};

export default TextareaWithManualResize;