import { ChangeEvent, useState } from 'react';
import InputText from '../../../../library/components/InputText';

const WithError = () => {

  const errorMessage = 'Don\'t use spaces';
  const [errorText, setErrorText] = useState(errorMessage);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes(' ')) {
      setErrorText(errorMessage);
    } else {
      setErrorText('');
    }
  }

  return <InputText label="Input with error text" placeholder="Placeholder text" errorText={errorText} onChange={handleChange} defaultValue="Value with spaces" />;
}

export default WithError;