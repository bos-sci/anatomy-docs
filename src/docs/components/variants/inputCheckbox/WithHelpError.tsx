import InputCheckbox from '../../../../library/components/InputCheckbox';

const WithHelpError = (): JSX.Element => {
  return (
    <InputCheckbox
      label="Checkbox"
      helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
      required forceValidation={true} />
  );
}

export default WithHelpError;