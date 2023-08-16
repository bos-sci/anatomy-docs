import { FormEvent, useState } from 'react';
import Form from 'library/components/Form';
import TextArea from 'library/components/TextArea';
import Example from 'docs/shared/components/Example';

const RequiredTextArea = (): JSX.Element => {
  const [didSubmit, setDidSubmit] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDidSubmit(true);
  };

  return (
    <Example>
      <Form onSubmit={handleSubmit}>
        <div className="bsds-form-control bsds-margin-top-remove">
          <TextArea label="Required textarea" forceValidation={didSubmit} required />
        </div>
      </Form>
    </Example>
  );
};

export default RequiredTextArea;
