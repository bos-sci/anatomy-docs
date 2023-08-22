import { FormEvent, useState } from 'react';
import Form from 'library/components/Form';
import InputText from 'library/components/InputText';
import Example from 'docs/shared/components/Example';

const Required = (): JSX.Element => {
  const [didSubmit, setDidSubmit] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDidSubmit(true);
  };

  return (
    <Example>
      <Form onSubmit={handleSubmit}>
        <div className="bsds-form-control bsds-margin-top-remove">
          <InputText label="Required text input" forceValidation={didSubmit} required />
        </div>
      </Form>
    </Example>
  );
};

export default Required;