import InputText from '../../../../library/components/InputText';
import Example from '../../../shared/components/Example';

const Disabled = (): JSX.Element => {
  return (
    <Example>
      <InputText label="Disabled text input" disabled />
      <InputText label="Disabled text input" value="Value" disabled />
    </Example>
  );
}

export default Disabled;