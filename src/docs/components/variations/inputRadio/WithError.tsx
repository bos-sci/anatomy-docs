import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Fieldset from '../../../../library/components/Fieldset';
import InputRadio from '../../../../library/components/InputRadio';

const WithError = () => {

  const [errorText, setErrorText] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('errorRadio1');

  const handleSubmit = (e: FormEvent) => e.preventDefault();

  const validate = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
  }

  useEffect(() => {
    if (selectedRadio === 'errorRadio1') {
      setErrorText('Please select a different option than before.');
    } else {
      setErrorText('');
    }
  }, [selectedRadio]);

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset legend="Legend" errorText={errorText} >
        <InputRadio label="Radio 1" name="groupError" value="errorRadio1" required onChange={validate} defaultChecked />
        <InputRadio label="Radio 2" name="groupError" value="errorRadio2" required onChange={validate} />
        <InputRadio label="Radio 3" name="groupError" value="errorRadio3" required onChange={validate} />
        <InputRadio label="Radio 4" name="groupError" value="errorRadio4" required disabled />
      </Fieldset>
    </form>
  );
}

export default WithError;