import InputText from '../../../../library/components/InputText';
import Example from '../../../shared/components/Example';

const WithPlaceholder = (): JSX.Element => {
  return (
    <Example>
      <InputText label="Text input" placeholder="Placeholder text" />
    </Example>
  );
}

export default WithPlaceholder;