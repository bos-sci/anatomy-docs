import { ChangeEvent, useState } from 'react';
import { InputRadio } from '@boston-scientific/anatomy-react';
import { RadioGroup } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const ButtonGroupStyle = (): JSX.Element => {
  const [selectedRadio, setSelectedRadio] = useState('groupButtonStyleRadio1');
  const [selectedHelpErrorRadio, setSelectedHelpErrorRadio] = useState('groupButtonStyleHelpError1');
  const error = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(error);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
  };

  const handleHelpErrorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedHelpErrorRadio(e.target.value);
    setErrorText(e.target.value === 'groupButtonStyleHelpError1' ? error : error);
  };

  return (
    <>
      <Example>
        <div className="bsds-form-control">
          <RadioGroup legend="Legend" buttonGroup>
            <InputRadio
              label="Radio 1"
              name="groupButtonStyleRadio"
              value="groupButtonStyleRadio1"
              checked={selectedRadio === 'groupButtonStyleRadio1'}
              onChange={handleChange}
            />
            <InputRadio
              label="Radio 2"
              name="groupButtonStyleRadio"
              value="groupButtonStyleRadio2"
              checked={selectedRadio === 'groupButtonStyleRadio2'}
              onChange={handleChange}
            />
            <InputRadio
              label="Radio 3"
              name="groupButtonStyleRadio"
              value="groupButtonStyleRadio3"
              checked={selectedRadio === 'groupButtonStyleRadio3'}
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
              name="groupButtonStyleHelpError"
              value="groupButtonStyleHelpError1"
              checked={selectedHelpErrorRadio === 'groupButtonStyleHelpError1'}
              forceValidation
              onChange={handleHelpErrorChange}
            />
            <InputRadio
              label="Radio 2"
              name="groupButtonStyleHelpError"
              value="groupButtonStyleHelpError2"
              checked={selectedHelpErrorRadio === 'groupButtonStyleHelpError2'}
              onChange={handleHelpErrorChange}
            />
            <InputRadio
              label="Radio 3"
              name="groupButtonStyleHelpError"
              value="groupButtonStyleHelpError3"
              checked={selectedHelpErrorRadio === 'groupButtonStyleHelpError3'}
              inputUnavailable
              onChange={handleHelpErrorChange}
            />
          </RadioGroup>
        </div>
      </Example>
    </>
  );
};

export default ButtonGroupStyle;
