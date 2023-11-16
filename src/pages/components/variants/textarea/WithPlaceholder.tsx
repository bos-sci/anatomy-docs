import { ChangeEvent, useState } from 'react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const TextareaWithPlaceholder = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <Textarea label="Textarea" placeholder="Placeholder text" value={inputValue} onChange={handleChange} />
    </Example>
  );
};

export default TextareaWithPlaceholder;
