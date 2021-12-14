import { FormEvent } from 'react';
import Fieldset from '../../../../library/components/Fieldset';
import InputRadio from '../../../../library/components/InputRadio';

const WithError = () => {
  const handleSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset legend="Legend" >
        <InputRadio label="Yes" name="groupError" value="errorRadio1" forceValidation={true} required />
        <InputRadio label="No" name="groupError" value="errorRadio2" required />
      </Fieldset>
    </form>
  );
}

export default WithError;