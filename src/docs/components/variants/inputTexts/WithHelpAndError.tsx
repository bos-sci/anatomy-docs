import { ChangeEvent, useState } from 'react';
import InputText from '../../../../library/components/InputText';

const WithHelpAndError = (): JSX.Element => {

  const errorMessage = 'Don\'t use spaces';
  const [errorText, setErrorText] = useState(errorMessage);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes(' ')) {
      setErrorText(errorMessage);
    } else {
      setErrorText('');
    }
  }

  return <InputText label="Input with error text" placeholder="Placeholder text" helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three." errorText={errorText} onChange={handleChange} defaultValue="Value with spaces" />;
}

export default WithHelpAndError;