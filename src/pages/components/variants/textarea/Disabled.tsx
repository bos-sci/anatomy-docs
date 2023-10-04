import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DisabledTextarea = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <Textarea label="Disabled textarea" disabled />
      </div>
      <div className="bsds-form-control">
        <Textarea label="Disabled textarea" value="Value" disabled />
      </div>
    </Example>
  );
};

export default DisabledTextarea;
