import { ChangeEvent, useState } from 'react';
import TextArea from 'library/components/TextArea';
import Example from 'docs/shared/components/Example';

const DefaultTextArea = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <TextArea id="textareaDefault" label="Textarea" value={inputValue} onChange={handleChange} />
      </div>
    </Example>
  );
};

export default DefaultTextArea;
