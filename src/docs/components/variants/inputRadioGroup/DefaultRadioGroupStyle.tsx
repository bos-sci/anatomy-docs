import { ChangeEvent, useState } from 'react';
import InputRadio from '../../../../library/components/InputRadio';
import RadioGroup from '../../../../library/components/RadioGroup';
import Example from '../../../shared/components/Example';

const DefaultRadioGroupStyle = (): JSX.Element => {
  const [selectedRadio, setSelectedRadio] = useState('defaultRadioStyle1');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <RadioGroup legend="Legend">
          <InputRadio
            label="Radio 1"
            name="groupDefaultRadioGroupStyle"
            value="defaultRadioStyle1"
            checked={selectedRadio === 'defaultRadioStyle1'}
            onChange={handleChange}
          />
          <InputRadio
            label="Radio 2"
            name="groupDefaultRadioGroupStyle"
            value="defaultRadioStyle2"
            checked={selectedRadio === 'defaultRadioStyle2'}
            onChange={handleChange}
          />
          <InputRadio
            label="Radio 3"
            name="groupDefaultRadioGroupStyle"
            value="defaultRadioStyle3"
            checked={selectedRadio === 'defaultRadioStyle3'}
            onChange={handleChange}
          />
        </RadioGroup>
      </div>
    </Example>
  );
};

export default DefaultRadioGroupStyle;
