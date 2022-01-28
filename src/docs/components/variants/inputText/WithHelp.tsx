import InputText from '../../../../library/components/InputText';
import Example from '../../../shared/components/Example';

const WithHelpText = (): JSX.Element => {
  return (
    <Example>
      <InputText
        label="Text input"
        helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three." />
    </Example>
  );
}

export default WithHelpText;