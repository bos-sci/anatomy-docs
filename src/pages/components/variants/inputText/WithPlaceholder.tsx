import { InputText } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithPlaceholder = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <InputText label="Text input" placeholder="Placeholder text" />
      </div>
    </Example>
  );
};

export default WithPlaceholder;
