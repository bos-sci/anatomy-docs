import { ChangeEvent, useEffect, useState } from 'react';
import Fieldset from '../../../../library/components/Fieldset';
import InputCheckbox from '../../../../library/components/InputCheckbox';

const CheckboxListError = () => {

  const errorMesage = 'Please check at least two options.';
  const [errorText, setErrorText] = useState(errorMesage);
  const [checkboxes, setCheckboxes] = useState([
    {
      text: 'Checkbox 1',
      isChecked: true
    },
    {
      text: 'Checkbox 2',
      isChecked: false
    },
    {
      text: 'Checkbox 3',
      isChecked: false
    },
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].isChecked = e.target.checked;
    setCheckboxes(updatedCheckboxes);
  }

  useEffect(() => {
    if (checkboxes.filter(c => c.isChecked === true).length < 2) {
      setErrorText(errorMesage);
    } else {
      setErrorText('');
    }
  }, [checkboxes]);

  return (
    <Fieldset legend="Legend" errorText={errorText} errorTextId="listErrorText">
      {checkboxes.map((checkbox, i) => (
        <InputCheckbox
          key={'checkboxListWithError' + i}
          label={checkbox.text}
          aria-describedby="listErrorText"
          onChange={e => handleChange(e, i)}
          aria-invalid={!!errorText}
          defaultChecked={checkbox.isChecked} />
      ))}
    </Fieldset>
  );
}

export default CheckboxListError;