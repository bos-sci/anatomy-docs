import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import Button from '../../../../library/components/Button';
import Fieldset from '../../../../library/components/Fieldset';
import Form from '../../../../library/components/Form';
import InputCheckbox from '../../../../library/components/InputCheckbox';
import InputRadio from '../../../../library/components/InputRadio';
import InputText from '../../../../library/components/InputText';
import RadioGroup from '../../../../library/components/RadioGroup';
import Example from '../../../shared/components/Example';

interface ADSInputElement extends HTMLInputElement {
  validate: () => void;
}

const DefaultForms = () => {

  const noSpacesError = 'This is an example of error text. Remove spaces to make this input valid.';
  const [noSpacesInputError, setNoSpacesInputError] = useState(noSpacesError);
  const noSpacesInput = useRef<ADSInputElement>(null);

  const validateTextInput = () => {
    setNoSpacesInputError(noSpacesInput.current?.value.includes(' ') ? noSpacesError : '');
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateTextInput();
  }

  const handleInvalid = (e: FormEvent<HTMLFormElement>) => {
    validateTextInput();
  }

  return (
    <Example>
      <Form onSubmit={handleSubmit} onInvalid={handleInvalid}>
        <InputText
          ref={noSpacesInput}
          label="Text input"
          defaultValue="Incorrect value"
          errorText={noSpacesInputError}
          onChange={() => console.log(noSpacesInput)}
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."/>
        <InputText label="Required text input" required />
        <InputText label="Disabled input" disabled />
        <Fieldset
          legend="Legend"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three.">
          <InputCheckbox label="Checkbox 1" />
          <InputCheckbox label="Checkbox 2" />
          <InputCheckbox label="Checkbox 3" />
        </Fieldset>
        <RadioGroup legend="Disabled radio group">
          <InputRadio label="Radio 1" name="groupDisabled" value="defaultRadio1" defaultChecked />
          <InputRadio label="Radio 2" name="groupDisabled" value="defaultRadio2" />
          <InputRadio label="Radio 3" name="groupDisabled" value="defaultRadio3" />
        </RadioGroup>
        <InputCheckbox label="Standalone required checkbox" required />
        <Button variant="assertive">Submit</Button>
      </Form>
    </Example>
  );
}

export default DefaultForms;