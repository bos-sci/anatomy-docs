import { ChangeEvent, useState } from 'react';
import InputText from '../../../../library/components/InputText';

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

  return <InputText label="Text input" errorText={errorText} onChange={handleChange} defaultValue="Invalid value" />;
}

export default WithError;