import InputCheckbox from '../../../../library/components/InputCheckbox';

const WithError = (): JSX.Element => {
  return <InputCheckbox label="Error checkbox" required forceValidation={true} />;
}

export default WithError;