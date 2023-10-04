import { FormEvent, useState } from 'react';
import { Textarea, Form } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const RequiredTextarea = (): JSX.Element => {
  const [didSubmit, setDidSubmit] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDidSubmit(true);
  };

  return (
    <Example>
      <Form onSubmit={handleSubmit}>
        <div className="bsds-form-control bsds-margin-top-remove">
          <Textarea label="Required textarea" forceValidation={didSubmit} required />
        </div>
      </Form>
    </Example>
  );
};

export default RequiredTextarea;
