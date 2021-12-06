import { ChangeEvent, useState } from 'react';
import InputText from '../../../../library/components/InputText';

const WithError = () => {

  const [errorText, setErrorText] = useState('Don\'t use spaces');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes(' ')) {
      setErrorText('Don\'t use spaces');
    } else {
      setErrorText('');
    }
  }

  return <InputText label="Input with error text" placeholder="Placeholder text" errorText={errorText} onChange={handleChange} defaultValue="Value with spaces" />;
}

export default WithError;