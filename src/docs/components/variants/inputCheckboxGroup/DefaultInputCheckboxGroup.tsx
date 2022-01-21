import Fieldset from '../../../../library/components/Fieldset';
import InputCheckbox from '../../../../library/components/InputCheckbox';

const DefaultInputCheckboxGroup = (): JSX.Element => {
  return (
    <Fieldset legend="Legend">
      <InputCheckbox label="Checkbox 1" />
      <InputCheckbox label="Checkbox 2" />
      <InputCheckbox label="Checkbox 3" />
    </Fieldset>
  );
}

export default DefaultInputCheckboxGroup;