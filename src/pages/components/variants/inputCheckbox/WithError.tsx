import { ChangeEvent, useEffect, useState } from 'react';
import { InputCheckbox } from '@boston-scientific/anatomy-react';
import { Fieldset } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithError = (): JSX.Element => {
  const errorMessage = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(errorMessage);
  const [groupErrorText, setGroupErrorText] = useState(errorMessage);
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
    }
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === true) {
      setErrorText('');
    } else {
      setErrorText(errorMessage);
    }
  };

  const handleGroupChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].isChecked = e.target.checked;
    setCheckboxes(updatedCheckboxes);
  };

  useEffect(() => {
    if (checkboxes.filter((c) => c.isChecked === true).length < 2) {
      setGroupErrorText(errorMessage);
    } else {
      setGroupErrorText('');
    }
  }, [checkboxes]);

  return (
    <>
      <Example>
        <div className="bsds-form-control">
          <InputCheckbox label="Checkbox" errorText={errorText} forceValidation onChange={handleChange} />
        </div>
      </Example>
      <Example>
        <Fieldset legend="Legend" errorText={groupErrorText}>
          {checkboxes.map((checkbox, i) => (
            <InputCheckbox
              key={'checkboxListWithError' + checkbox.text}
              label={checkbox.text}
              aria-describedby="listErrorText"
              aria-invalid={!!groupErrorText}
              defaultChecked={checkbox.isChecked}
              onChange={(e) => handleGroupChange(e, i)}
            />
          ))}
        </Fieldset>
      </Example>
    </>
  );
};

export default WithError;
