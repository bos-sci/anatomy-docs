import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const Icon = (): JSX.Element => {
  return (
    <Example isFlex>
      <Button type="button" icon="plus" aria-label="icon button" />
    </Example>
  );
};

export default Icon;
