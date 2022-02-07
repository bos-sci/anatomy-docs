import InputText from '../../../../library/components/InputText';
import Example from '../../../shared/components/Example';

const Readonly = (): JSX.Element => {
  return (
    <Example>
      <div className="ads-form-control">
        <InputText label="Readonly text input" readOnly />
      </div>
      <div className="ads-form-control">
        <InputText label="Readonly text input" value="Value" readOnly />
      </div>
    </Example>
  );
}

export default Readonly;