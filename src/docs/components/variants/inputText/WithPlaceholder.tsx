import InputText from '../../../../library/components/InputText';
import Example from '../../../shared/components/Example';

const WithPlaceholder = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <InputText label="Text input" placeholder="Placeholder text" />
      </div>
    </Example>
  );
}

export default WithPlaceholder;