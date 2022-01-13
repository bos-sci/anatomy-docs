import Fieldset from '../../../../library/components/Fieldset';
import InputCheckbox from '../../../../library/components/InputCheckbox';

const CheckboxListHelpText = (): JSX.Element => {
  return (
    <Fieldset legend="Legend" helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three.">
      <InputCheckbox label="Checkbox 1" />
      <InputCheckbox label="Checkbox 2" />
      <InputCheckbox label="Checkbox 3" />
    </Fieldset>
  );
}

export default CheckboxListHelpText;