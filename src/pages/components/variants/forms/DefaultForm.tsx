import { FormEvent, useRef, useState } from 'react';
import { Button } from '@boston-scientific/anatomy-react';
import { Fieldset } from '@boston-scientific/anatomy-react';
import { Form } from '@boston-scientific/anatomy-react';
import { InputCheckbox } from '@boston-scientific/anatomy-react';
import { InputRadio } from '@boston-scientific/anatomy-react';
import { InputText } from '@boston-scientific/anatomy-react';
import { RadioGroup } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';
import { Select } from '@boston-scientific/anatomy-react';
import { Option } from '@boston-scientific/anatomy-react';
import { Textarea } from '@boston-scientific/anatomy-react';

interface ADSInputElement extends HTMLInputElement {
  validate: () => void;
}

const DefaultForm = () => {
  const noSpacesError = 'This is an example of an error message. Delete the spaces to clear the error message.';
  const [noSpacesInputError, setNoSpacesInputError] = useState(noSpacesError);
  const noSpacesInput = useRef<ADSInputElement>(null);

  const validateTextInput = () => {
    setNoSpacesInputError(noSpacesInput.current?.value.includes(' ') ? noSpacesError : '');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateTextInput();
  };

  const handleInvalid = (e: FormEvent<HTMLFormElement>) => {
    validateTextInput();
  };

  return (
    <Example>
      <h2>Form example</h2>
      <p>Submit the form to see an example of validation.</p>
      <Form onSubmit={handleSubmit} onInvalid={handleInvalid}>
        <div className="bsds-form-control">
          <InputText
            ref={noSpacesInput}
            label="Text input"
            defaultValue="Invalid value"
            errorText={noSpacesInputError}
            helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
            onBlur={validateTextInput}
            onChange={validateTextInput}
          />
        </div>
        <div className="bsds-form-control">
          <InputText label="Required text input" required />
        </div>
        <div className="bsds-form-control">
          <InputText label="Disabled text input" disabled />
        </div>
        <div className="bsds-form-control">
          <Textarea label="Textarea" />
        </div>
        <div className="bsds-form-control">
          <Select id="optionDefault" label="Select">
            <Option value="" disabled selected />

            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
        </div>
        <div className="bsds-form-control">
          <Fieldset
            legend="Checkbox group"
            helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
          >
            <InputCheckbox label="Checkbox 1" />
            <InputCheckbox label="Checkbox 2" />
            <InputCheckbox label="Checkbox 3" />
          </Fieldset>
        </div>
        <div className="bsds-form-control">
          <RadioGroup legend="Radio group">
            <InputRadio label="Radio 1" name="groupDisabled" value="defaultRadio1" defaultChecked />
            <InputRadio label="Radio 2" name="groupDisabled" value="defaultRadio2" />
            <InputRadio label="Radio 3" name="groupDisabled" value="defaultRadio3" />
          </RadioGroup>
        </div>
        <div className="bsds-form-control">
          <InputCheckbox label="Required checkbox" required />
        </div>
        <div className="bsds-form-control">
          <Button variant="assertive">Submit</Button>
        </div>
      </Form>
    </Example>
  );
};

export default DefaultForm;
