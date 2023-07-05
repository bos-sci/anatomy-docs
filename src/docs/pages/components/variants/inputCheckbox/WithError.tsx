import InputCheckbox from 'library/components/InputCheckbox';
import Example from 'docs/shared/components/Example';

const WithError = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <InputCheckbox label="Checkbox" forceValidation required />
      </div>
    </Example>
  );
};

export default WithError;
