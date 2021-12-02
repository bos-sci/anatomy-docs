import { ChangeEvent, useState } from 'react';
import InputText from '../../../../library/components/InputText';

const Default = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  return <InputText label="Default input" placeholder="Placeholder text" value={inputValue} onChange={handleChange} />;
}

export default Default;