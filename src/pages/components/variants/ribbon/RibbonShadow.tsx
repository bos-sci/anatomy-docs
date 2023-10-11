import { Ribbon } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const RibbonShadow = (): JSX.Element => {
  return (
    <Example>
      <Ribbon variant="informational" withShadow>
        Ribbon with shadow
      </Ribbon>
    </Example>
  );
};

export default RibbonShadow;
