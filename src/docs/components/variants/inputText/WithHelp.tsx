import InputText from '../../../../library/components/InputText';
import Example from '../../../shared/components/Example';

const WithHelpText = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <InputText
          label="Text input"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three." />
      </div>
    </Example>
  );
}

export default WithHelpText;