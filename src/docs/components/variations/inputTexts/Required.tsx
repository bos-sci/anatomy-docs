import { FormEvent, useState } from 'react';
import InputText from '../../../../library/components/InputText';

const Required = (): JSX.Element => {

  // TODO: Handle on submit valdiation within a form component
  const [didSubmit, setDidSubmit] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDidSubmit(true);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <InputText label="Required input" placeholder="Placeholder text" forceValidation={didSubmit} required />
    </form>
  );
}

export default Required;