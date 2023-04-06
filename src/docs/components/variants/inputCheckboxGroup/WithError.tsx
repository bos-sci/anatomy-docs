import { ChangeEvent, useEffect, useState } from 'react';
import Fieldset from '../../../../library/components/Fieldset';
import InputCheckbox from '../../../../library/components/InputCheckbox';
import Example from '../../../shared/components/Example';

const WithError = (): JSX.Element => {
  const errorMessage = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(errorMessage);
  const [checkboxes, setCheckboxes] = useState([
    {
      text: 'Checkbox 1',
      isChecked: true,
    },
    {
      text: 'Checkbox 2',
      isChecked: false,
    },
    {
      text: 'Checkbox 3',
      isChecked: false,
    },
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].isChecked = e.target.checked;
    setCheckboxes(updatedCheckboxes);
  };

  useEffect(() => {
    if (checkboxes.filter((c) => c.isChecked === true).length < 2) {
      setErrorText(errorMessage);
    } else {
      setErrorText('');
    }
  }, [checkboxes]);

  return (
    <Example>
      <div className="bsds-form-control">
        <Fieldset legend="Legend" errorText={errorText}>
          {checkboxes.map((checkbox, i) => (
            <InputCheckbox
              key={'checkboxListWithError' + i}
              label={checkbox.text}
              aria-describedby="listErrorText"
              onChange={(e) => handleChange(e, i)}
              aria-invalid={!!errorText}
              defaultChecked={checkbox.isChecked}
            />
          ))}
        </Fieldset>
      </div>
    </Example>
  );
};

export default WithError;
