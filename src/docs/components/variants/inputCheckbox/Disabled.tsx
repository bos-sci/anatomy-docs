import InputCheckbox from '../../../../library/components/InputCheckbox';
import Example from '../../../shared/components/Example';

const Disabled = (): JSX.Element => {
  return (
    <Example>
      <InputCheckbox label="Disabled checkbox" disabled/>
      <InputCheckbox label="Disabled checked checkbox" disabled defaultChecked />
    </Example>
  );
}

export default Disabled;