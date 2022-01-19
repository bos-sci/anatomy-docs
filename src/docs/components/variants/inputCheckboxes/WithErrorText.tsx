import InputCheckbox from '../../../../library/components/InputCheckbox';

const WithErrorText = (): JSX.Element => {
  return <InputCheckbox label="Error checkbox" required forceValidation={true} />;
}

export default WithErrorText;