import { useState } from 'react';
import InputCheckbox from '../../../../library/components/InputCheckbox';

const WithError = () => {

  const [errorText, setErrorText] = useState('Error message');

  const removeError = () => {
    setErrorText('');
  };

  return <InputCheckbox label="Error checkbox" errorText={errorText} onChange={removeError} />;
}

export default WithError;