import { ChangeEvent, useState } from 'react';
import InputText from '../../../../library/components/InputText';

const WithError = () => {

  const [errorText, setErrorText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes(' ')) {
      setErrorText('This field can\'t contain spaces.');
    } else {
      setErrorText('');
    }
  }

  return <InputText label="Input with error text" placeholder="Placeholder text" errorText={errorText} onChange={handleChange} />;
}

export default WithError;