import { ChangeEvent, useEffect, useState } from 'react';
import { InputCheckbox } from '@boston-scientific/anatomy-react';
import { Fieldset } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithHelpError = (): JSX.Element => {
  const errorMessage = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(errorMessage);
  const [checkbox, setCheckbox] = useState({ text: 'Checkbox', isChecked: false });
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
    const updatedCheckbox = { ...checkbox };
    updatedCheckbox.isChecked = e.target.checked;
    setCheckbox(updatedCheckbox);
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

  useEffect(() => {
    if (checkbox.isChecked === false) {
      setErrorText(errorMessage);
    } else {
      setErrorText('');
    }
  }, [checkbox]);

  return (
    <>
      <Example>
        <div className="bsds-form-control">
          <InputCheckbox
            label="Checkbox"
            helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
            errorText={errorText}
            forceValidation
            onChange={handleChange}
          />
        </div>
      </Example>
      <Example>
        <Fieldset
          legend="Legend"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
          errorText={groupErrorText}
        >
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

export default WithHelpError;
