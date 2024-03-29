import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const IconRight = (): JSX.Element => {
  return (
    <Example isFlex>
      <Button type="button" icon="chevronRight" iconAlignment="right">
        Icon right
      </Button>
    </Example>
  );
};

export default IconRight;
