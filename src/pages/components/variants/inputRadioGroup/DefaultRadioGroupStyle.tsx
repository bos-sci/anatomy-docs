import { ChangeEvent, useState } from 'react';
import { InputRadio } from '@boston-scientific/anatomy-react';
import { RadioGroup } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultRadioGroupStyle = (): JSX.Element => {
  const [selectedRadio, setSelectedRadio] = useState('groupDefaultStyle1');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <Example>
      <div className="bsds-form-control">
        <RadioGroup legend="Legend">
          <InputRadio
            label="Radio 1"
            name="groupDefaultStyle"
            value="groupDefaultStyle1"
            checked={selectedRadio === 'groupDefaultStyle1'}
            onChange={handleChange}
          />
          <InputRadio
            label="Radio 2"
            name="groupDefaultStyle"
            value="groupDefaultStyle2"
            checked={selectedRadio === 'groupDefaultStyle2'}
            onChange={handleChange}
          />
          <InputRadio
            label="Radio 3"
            name="groupDefaultStyle"
            value="groupDefaultStyle3"
            checked={selectedRadio === 'groupDefaultStyle3'}
            onChange={handleChange}
          />
        </RadioGroup>
      </div>
    </Example>
  );
};

export default DefaultRadioGroupStyle;
