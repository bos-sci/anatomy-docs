import { FormEvent } from 'react';
import InputRadio from '../../../../library/components/InputRadio';
import InputRadioGroup from '../../../../library/components/InputRadioGroup';

const WithError = () => {
  const handleSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <form onSubmit={handleSubmit}>
      <InputRadioGroup legend="Legend" >
        <InputRadio label="Yes" name="groupRequired" value="errorRequired1" required forceValidation={true}/>
        <InputRadio label="No" name="groupRequired" value="errorRequired2" required />
      </InputRadioGroup>
    </form>
  );
}

export default WithError;