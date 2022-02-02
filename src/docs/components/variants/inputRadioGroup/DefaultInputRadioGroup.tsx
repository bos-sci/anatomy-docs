import { ChangeEvent, useState } from 'react';
import InputRadio from '../../../../library/components/InputRadio';
import RadioGroup from '../../../../library/components/RadioGroup';
import Example from '../../../shared/components/Example';

const DefaultInputRadioGroup = (): JSX.Element => {
  const [selectedRadio, setSelectedRadio] = useState('defaultRadio1');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
  }

  return (
    <Example>
      <div className="ads-form-control">
        <RadioGroup legend="Legend">
          <InputRadio
            label="Radio 1"
            name="groupDefault"
            value="defaultRadio1"
            onChange={handleChange}
            checked={selectedRadio === 'defaultRadio1'} />
          <InputRadio
            label="Radio 2"
            name="groupDefault"
            value="defaultRadio2"
            onChange={handleChange}
            checked={selectedRadio === 'defaultRadio2'} />
          <InputRadio
            label="Radio 3"
            name="groupDefault"
            value="defaultRadio3"
            onChange={handleChange}
            checked={selectedRadio === 'defaultRadio3'} />
        </RadioGroup>
      </div>
    </Example>
  );
}

export default DefaultInputRadioGroup;