import InputCheckbox from '../../../../library/components/InputCheckbox';
import Example from '../../../shared/components/Example';

const WithError = (): JSX.Element => {
  return (
    <Example>
      <InputCheckbox label="Checkbox" required forceValidation={true} />
    </Example>
  );
}

export default WithError;