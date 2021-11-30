import { useState } from 'react';
import InputCheckbox from '../../../../library/components/InputCheckbox';

const CheckboxListError = () => {
  const [errorText, setErrorText] = useState('Error message');

  const removeError = () => {
    setErrorText('');
  };

  return (
    <fieldset className="ads-fieldset" aria-describedby="listErrorMessage" aria-invalid={errorText ? 'true' : 'false'}>
      <legend className="ads-legend">Legend</legend>
      <p id="listErrorMessage" className="ads-input-error">{ errorText }</p>
      <InputCheckbox label="Checkbox 1" onChange={removeError} checked />
      <InputCheckbox label="Checkbox 2" onChange={removeError} />
      <InputCheckbox label="Checkbox 3" onChange={removeError} />
    </fieldset>
  );
}

export default CheckboxListError;