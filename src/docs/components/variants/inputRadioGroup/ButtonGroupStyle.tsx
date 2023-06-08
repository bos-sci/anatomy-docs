import { ChangeEvent, useState } from 'react';
import InputRadio from '../../../../library/components/InputRadio';
import RadioGroup from '../../../../library/components/RadioGroup';
import Example from '../../../shared/components/Example';

const ButtonGroupStyle = (): JSX.Element => {
  const [selectedRadio, setSelectedRadio] = useState('buttonGroupRadio1');
  const [selectedHelpRadio, setSelectedHelpRadio] = useState('buttonGroupHelpRadio1');
  const error = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(error);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
  };

  const handleHelpChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedHelpRadio(e.target.value);
    setErrorText(e.target.value === 'buttonGroupHelpRadio1' ? error : '');
  };

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
        <div className="bsds-form-control">
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
              checked={selectedHelpRadio === 'buttonGroupHelpRadio1'}
              forceValidation
              onChange={handleHelpChange}
            />
            <InputRadio
              label="Radio 2"
              name="buttonGroupHelpRadio"
              value="buttonGroupHelpRadio2"
              checked={selectedHelpRadio === 'buttonGroupHelpRadio2'}
              onChange={handleHelpChange}
            />
            <InputRadio
              label="Radio 3"
              name="buttonGroupHelpRadio"
              value="buttonGroupHelpRadio3"
              checked={selectedHelpRadio === 'buttonGroupHelpRadio3'}
              onChange={handleHelpChange}
            />
          </RadioGroup>
        </div>
      </Example>
    </>
  );
};

export default ButtonGroupStyle;
