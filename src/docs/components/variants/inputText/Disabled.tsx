import InputText from '../../../../library/components/InputText';
import Example from '../../../shared/components/Example';

const Disabled = (): JSX.Element => {
  return (
    <Example>
      <div className="lib-form-control">
        <InputText label="Disabled text input" disabled />
      </div>
      <div className="lib-form-control">
        <InputText label="Disabled text input" value="Value" disabled />
      </div>
    </Example>
  );
}

export default Disabled;