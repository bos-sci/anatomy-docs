import { FormEvent, useState } from 'react';
import Form from 'library/components/Form';
import Textarea from 'library/components/Textarea';
import Example from 'docs/shared/components/Example';

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
