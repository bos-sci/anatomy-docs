import Fieldset from '../../../../library/components/Fieldset';
import InputCheckbox from '../../../../library/components/InputCheckbox';

const Disabled = (): JSX.Element => {
  return (
    <Fieldset legend="Disabled checkbox group" disabled>
      <InputCheckbox label="Checkbox 1" defaultChecked />
      <InputCheckbox label="Checkbox 2" />
      <InputCheckbox label="Checkbox 3" />
    </Fieldset>
  );
}

export default Disabled;