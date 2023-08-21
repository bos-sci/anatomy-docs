import { ChangeEvent, useState } from 'react';
import Textarea from 'library/components/Textarea';
import Example from 'docs/shared/components/Example';

const DefaultTextarea = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <Textarea id="textareaDefault" label="Textarea" value={inputValue} onChange={handleChange} />
      </div>
    </Example>
  );
};

export default DefaultTextarea;
