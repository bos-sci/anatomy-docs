import { ChangeEvent, useState } from 'react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const TextareaWithHelp = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <Textarea
        label="Textarea"
        value={inputValue}
        helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
        onChange={handleChange}
      />
    </Example>
  );
};

export default TextareaWithHelp;
