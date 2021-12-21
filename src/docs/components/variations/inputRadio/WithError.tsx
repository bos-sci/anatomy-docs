import { FormEvent } from 'react';
import InputRadio from '../../../../library/components/InputRadio';
import RadioGroup from '../../../../library/components/RadioGroup';

const WithError = (): JSX.Element => {
  const handleSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <form onSubmit={handleSubmit}>
      <RadioGroup legend="Legend" >
        <InputRadio label="Yes" name="groupRequired" value="errorRequired1" required forceValidation={true}/>
        <InputRadio label="No" name="groupRequired" value="errorRequired2" required />
      </RadioGroup>
    </form>
  );
}

export default WithError;