import { InputText } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const Readonly = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <InputText label="Readonly text input" readOnly />
      </div>
      <div className="bsds-form-control">
        <InputText label="Readonly text input" value="Value" readOnly />
      </div>
    </Example>
  );
};

export default Readonly;
