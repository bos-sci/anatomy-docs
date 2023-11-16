import { FormEvent, useState } from 'react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const RequiredTextarea = (): JSX.Element => {
  const [didSubmit, setDidSubmit] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setDidSubmit(true);
  };

  return (
    <Example>
      <Textarea label="Required textarea" forceValidation={didSubmit} required onSubmit={handleSubmit} />
    </Example>
  );
};

export default RequiredTextarea;
