import Fieldset from '../../../../library/components/Fieldset';
import InputCheckbox from '../../../../library/components/InputCheckbox';

const Disabled = (): JSX.Element => {
  return (
    <Fieldset legend="Legend" disabled>
      <InputCheckbox label="Disabled unchecked checkbox" />
      <InputCheckbox label="Disabled checked checkbox" defaultChecked />
    </Fieldset>
  );
}

export default Disabled;