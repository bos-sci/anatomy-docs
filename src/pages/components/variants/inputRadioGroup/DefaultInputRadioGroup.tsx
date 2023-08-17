import { ChangeEvent, useState } from 'react';
import { InputRadio } from '@boston-scientific/anatomy-react';
import { RadioGroup } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultInputRadioGroup = (): JSX.Element => {
  const [selectedRadio, setSelectedRadio] = useState('defaultRadio1');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <RadioGroup legend="Legend">
          <InputRadio
            label="Radio 1"
            name="groupDefault"
            value="defaultRadio1"
            checked={selectedRadio === 'defaultRadio1'}
            onChange={handleChange}
          />
          <InputRadio
            label="Radio 2"
            name="groupDefault"
            value="defaultRadio2"
            checked={selectedRadio === 'defaultRadio2'}
            onChange={handleChange}
          />
          <InputRadio
            label="Radio 3"
            name="groupDefault"
            value="defaultRadio3"
            checked={selectedRadio === 'defaultRadio3'}
            onChange={handleChange}
          />
        </RadioGroup>
      </div>
    </Example>
  );
};

export default DefaultInputRadioGroup;
