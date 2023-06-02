import { ChangeEvent, useState } from 'react';
import InputRadio from '../../../../library/components/InputRadio';
import RadioGroup from '../../../../library/components/RadioGroup';
import Example from '../../../shared/components/Example';

const ButtonGroupStyle = (): JSX.Element => {
  const [selectedRadio, setSelectedRadio] = useState('defaultRadio1');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <RadioGroup legend="Legend" buttonGroup>
          <InputRadio
            label="1"
            name="buttonGroupRadio"
            value="buttonGroupRadio1"
            checked={selectedRadio === 'buttonGroupRadio1'}
            onChange={handleChange}
          />
          <InputRadio
            label="Option 2"
            name="buttonGroupRadio"
            value="buttonGroupRadio2"
            checked={selectedRadio === 'buttonGroupRadio2'}
            onChange={handleChange}
          />
          <InputRadio
            label="Really long option 3"
            name="buttonGroupRadio"
            value="buttonGroupRadio3"
            checked={selectedRadio === 'buttonGroupRadio3'}
            onChange={handleChange}
          />
          <InputRadio
            label="Really long option 4"
            name="buttonGroupRadio"
            value="buttonGroupRadio4"
            checked={selectedRadio === 'buttonGroupRadio4'}
            onChange={handleChange}
          />
          <InputRadio
            label="Really extra super long option 5"
            name="buttonGroupRadio"
            value="buttonGroupRadio5"
            checked={selectedRadio === 'buttonGroupRadio5'}
            onChange={handleChange}
          />
          <InputRadio
            label="Really long option 6"
            name="buttonGroupRadio"
            value="buttonGroupRadio6"
            checked={selectedRadio === 'buttonGroupRadio6'}
            onChange={handleChange}
          />
        </RadioGroup>
      </div>
    </Example>
  );
};

export default ButtonGroupStyle;
