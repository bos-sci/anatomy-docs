import { FormEvent, useState } from 'react';
import { InputText } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const Required = (): JSX.Element => {
  const [didSubmit, setDidSubmit] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDidSubmit(true);
  };

  return (
    <Example>
      <InputText label="Required text input" forceValidation={didSubmit} required onSubmit={handleSubmit} />
    </Example>
  );
};

export default Required;
