import { useState } from 'react';
import Fieldset from '../../../../library/components/Fieldset';
import InputCheckbox from '../../../../library/components/InputCheckbox';

const CheckboxListError = () => {
  const [errorText, setErrorText] = useState('Error message');

  const removeError = () => {
    setErrorText('');
  };

  return (
    <Fieldset legend="Legend" errorText={errorText} errorTextId="listErrorText">
      <InputCheckbox label="Checkbox 1" aria-describedby="listErrorText" onChange={removeError} aria-invalid={!!errorText} defaultChecked />
      <InputCheckbox label="Checkbox 2" aria-describedby="listErrorText" onChange={removeError} aria-invalid={!!errorText} />
      <InputCheckbox label="Checkbox 3" aria-describedby="listErrorText" onChange={removeError} aria-invalid={!!errorText} />
    </Fieldset>
  );
}

export default CheckboxListError;