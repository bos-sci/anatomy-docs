import InputCheckbox from '../../../../library/components/InputCheckbox';

const WithError = (): JSX.Element => {
  return <InputCheckbox label="Checkbox" required forceValidation={true} />;
}

export default WithError;