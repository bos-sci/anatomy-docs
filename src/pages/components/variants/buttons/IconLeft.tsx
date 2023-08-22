import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const IconLeft = (): JSX.Element => {
  return (
    <Example isFlex>
      <Button type="button" icon="plus">
        Icon left
      </Button>
    </Example>
  );
};

export default IconLeft;
