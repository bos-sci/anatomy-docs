import { ChangeEvent, useState } from 'react';
import Textarea from 'library/components/Textarea';
import Example from 'docs/shared/components/Example';

const TextareaWithPlaceholder = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <Textarea label="Textarea" placeholder="Placeholder text" value={inputValue} onChange={handleChange} />
      </div>
    </Example>
  );
};

export default TextareaWithPlaceholder;
