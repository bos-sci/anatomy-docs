import { ChangeEvent, useState } from 'react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultTextarea = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <Textarea id="textareaDefault" label="Textarea" value={inputValue} onChange={handleChange} />
    </Example>
  );
};

export default DefaultTextarea;
