import InputCheckbox from '../../../../library/components/InputCheckbox';
import Example from '../../../shared/components/Example';

const WithHelpError = (): JSX.Element => {
  return (
    <Example>
      <div className="ads-form-control">
        <InputCheckbox
          label="Checkbox"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
          required forceValidation={true} />
      </div>
    </Example>
  );
}

export default WithHelpError;