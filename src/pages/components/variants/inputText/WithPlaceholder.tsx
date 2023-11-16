import { InputText } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithPlaceholder = (): JSX.Element => {
  return (
    <Example>
      <InputText label="Text input" placeholder="Placeholder text" />
    </Example>
  );
};

export default WithPlaceholder;
