import { ChangeEvent, useState } from 'react';
import InputRadio from '../../../../library/components/InputRadio';

const Default = () => {
  const [selectedRadio, setSelectedRadio] = useState('defaultRadio1');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
  }

  return <>
    <form>
      <fieldset className="ads-fieldset">
        <legend className="ads-legend">Legend</legend>
        <InputRadio label="Radio 1" name="groupDefault" value="defaultRadio1" onChange={handleChange} checked={selectedRadio === 'defaultRadio1'} />
        <InputRadio label="Radio 2" name="groupDefault" value="defaultRadio2" onChange={handleChange} checked={selectedRadio === 'defaultRadio2'} />
        <InputRadio label="Radio 3" name="groupDefault" value="defaultRadio3" onChange={handleChange} checked={selectedRadio === 'defaultRadio3'} />
        <InputRadio label="Radio 4" name="groupDefault" value="defaultRadio4" onChange={handleChange} checked={selectedRadio === 'defaultRadio4'} />
      </fieldset>
    </form>
  </>;
}

export default Default;