import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const ActiveFilterStyle = (): JSX.Element => {
  return (
    <Example isFlex>
      <Button type="button" activeFilter>
        Active filter button
      </Button>
    </Example>
  );
};

export default ActiveFilterStyle;
