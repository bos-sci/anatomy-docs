import InputText from '../../../../library/components/InputText';
import Example from '../../../shared/components/Example';

const Readonly = (): JSX.Element => {
  return (
    <Example>
      <InputText label="Readonly text input" readOnly />
      <InputText label="Readonly text input" value="Value" readOnly />
    </Example>
  );
}

export default Readonly;