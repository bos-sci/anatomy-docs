import { ChangeEvent, useState } from 'react';
import InputText from '../../../../library/components/InputText';
import Example from '../../../shared/components/Example';

const DefaultInputText = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  return (
    <Example>
      <div className="bsds-form-control">
        <InputText id="textInputDefault" label="Text input" value={inputValue} onChange={handleChange} />
      </div>
    </Example>
  );
}

export default DefaultInputText;