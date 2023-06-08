import { ChangeEvent, useState, FormEvent } from 'react';
import Form from '../../../../library/components/Form';
import InputRadio from '../../../../library/components/InputRadio';
import RadioGroup from '../../../../library/components/RadioGroup';
import Example from '../../../shared/components/Example';

const ButtonGroupStyle = (): JSX.Element => {
  const [selectedRadio, setSelectedRadio] = useState('buttonGroupRadio1');
  const [selectedErrorRadio, setSelectedErrorRadio] = useState('buttonGroupHelpRadio1');
  const error = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(error);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
    setSelectedErrorRadio(e.target.value);
    setErrorText(e.target.value === 'buttonGroupHelpRadio1' ? error : '');
  };
  const handleSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <>
      <Example>
        <div className="bsds-form-control">
          <RadioGroup legend="Legend" buttonGroup>
            <InputRadio
              label="Radio 1"
              name="buttonGroupRadio"
              value="buttonGroupRadio1"
              checked={selectedRadio === 'buttonGroupRadio1'}
              onChange={handleChange}
            />
            <InputRadio
              label="Radio 2"
              name="buttonGroupRadio"
              value="buttonGroupRadio2"
              checked={selectedRadio === 'buttonGroupRadio2'}
              onChange={handleChange}
            />
            <InputRadio
              label="Radio 3"
              name="buttonGroupRadio"
              value="buttonGroupRadio3"
              checked={selectedRadio === 'buttonGroupRadio3'}
              inputUnavailable
              onChange={handleChange}
            />
          </RadioGroup>
        </div>
      </Example>
      <Example>
        <Form onSubmit={handleSubmit}>
          <div className="bsds-form-control bsds-margin-top-remove">
            <RadioGroup
              legend="Legend"
              helpText="This is an example help text. It can wrap to two lines, but try not to go longer than three."
              errorText={errorText}
              buttonGroup
            >
              <InputRadio
                label="Radio 1"
                name="buttonGroupHelpRadio"
                value="buttonGroupHelpRadio1"
                checked={selectedErrorRadio === 'buttonGroupHelpRadio1'}
                forceValidation
                onChange={handleChange}
              />
              <InputRadio
                label="Radio 2"
                name="buttonGroupHelpRadio"
                value="buttonGroupHelpRadio2"
                checked={selectedErrorRadio === 'buttonGroupHelpRadio2'}
                onChange={handleChange}
              />
              <InputRadio
                label="Radio 3"
                name="buttonGroupHelpRadio"
                value="buttonGroupHelpRadio3"
                checked={selectedErrorRadio === 'buttonGroupHelpRadio3'}
                onChange={handleChange}
              />
            </RadioGroup>
          </div>
        </Form>
      </Example>
    </>
  );
};

export default ButtonGroupStyle;
