import Fieldset from '../../../../library/components/Fieldset';
import InputCheckbox from '../../../../library/components/InputCheckbox';
import Example from '../../../shared/components/Example';

const Disabled = (): JSX.Element => {
  return (
    <Example>
      <Fieldset legend="Disabled checkbox group" disabled>
        <InputCheckbox label="Checkbox 1" defaultChecked />
        <InputCheckbox label="Checkbox 2" />
        <InputCheckbox label="Checkbox 3" />
      </Fieldset>
    </Example>
  );
}

export default Disabled;