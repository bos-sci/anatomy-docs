import { ChangeEvent, useState } from 'react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const TextareaWithHelpError = (): JSX.Element => {
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
        <Textarea
          label="Textarea"
          errorText={errorText}
          defaultValue="Invalid value"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
          forceValidation
          onChange={handleChange}
        />
      </div>
    </Example>
  );
};

export default TextareaWithHelpError;
