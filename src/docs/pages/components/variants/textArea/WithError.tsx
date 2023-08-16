import { ChangeEvent, useState } from 'react';
import TextArea from 'library/components/TextArea';
import Example from 'docs/shared/components/Example';

const TextAreaWithError = (): JSX.Element => {
  const errorMessage = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(errorMessage);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.includes(' ')) {
      setErrorText(errorMessage);
    } else {
      setErrorText('');
    }
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <TextArea
          label="Textarea"
          errorText={errorText}
          defaultValue="Invalid value"
          forceValidation
          onChange={handleChange}
        />
      </div>
    </Example>
  );
};

export default TextAreaWithError;
