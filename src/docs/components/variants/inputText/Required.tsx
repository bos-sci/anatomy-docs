import { FormEvent, useState } from 'react';
import InputText from '../../../../library/components/InputText';
import Example from '../../../shared/components/Example';

const Required = (): JSX.Element => {

  // TODO: Handle on submit valdiation within a form component
  const [didSubmit, setDidSubmit] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDidSubmit(true);
  }

  return (
    <Example>
      <form className="ads-form" onSubmit={handleSubmit} noValidate>
        <InputText label="Required text input" forceValidation={didSubmit} required />
      </form>
    </Example>
  );
}

export default Required;