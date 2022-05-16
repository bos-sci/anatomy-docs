import { ChangeEvent, useState } from 'react';
import InputText from '../../../../library/components/InputText';
import Example from '../../../shared/components/Example';

const WithError = (): JSX.Element => {

  const errorMessage = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(errorMessage);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes(' ')) {
      setErrorText(errorMessage);
    } else {
      setErrorText('');
    }
  }

  return (
    <Example>
      <div className="ads-form-control">
        <InputText label="Text input" errorText={errorText} onChange={handleChange} defaultValue="Invalid value" forceValidation />
      </div>
    </Example>
  );
}

export default WithError;