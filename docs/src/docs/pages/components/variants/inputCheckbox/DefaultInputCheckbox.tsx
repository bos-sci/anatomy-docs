import InputCheckbox from 'library/components/InputCheckbox';
import Example from 'docs/shared/components/Example';

const DefaultInputCheckbox = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <InputCheckbox label="Checkbox" />
      </div>
    </Example>
  );
};

export default DefaultInputCheckbox;
