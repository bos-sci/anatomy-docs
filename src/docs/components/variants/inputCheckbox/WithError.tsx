import InputCheckbox from '../../../../library/components/InputCheckbox';
import Example from '../../../shared/components/Example';

const WithError = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <InputCheckbox label="Checkbox" required forceValidation={true} />
      </div>
    </Example>
  );
};

export default WithError;
