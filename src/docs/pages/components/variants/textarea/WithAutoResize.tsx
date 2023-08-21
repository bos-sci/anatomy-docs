import { ChangeEvent, useState } from 'react';
import Textarea from 'library/components/Textarea';
import Example from 'docs/shared/components/Example';

const TextareaWithAutoResize = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <Textarea label="Textarea" value={inputValue} autoResize onChange={handleChange} />
      </div>
    </Example>
  );
};

export default TextareaWithAutoResize;
