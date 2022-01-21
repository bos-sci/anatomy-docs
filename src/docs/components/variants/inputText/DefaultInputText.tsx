import { ChangeEvent, useState } from 'react';
import InputText from '../../../../library/components/InputText';

const DefaultInputText = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  return <InputText label="Text input" value={inputValue} onChange={handleChange} />;
}

export default DefaultInputText;