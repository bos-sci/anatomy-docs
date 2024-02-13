import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const TextStyle = (): JSX.Element => {
  return (
    <Example isFlex>
      <Button variant="text" type="button">
        Button
      </Button>
      <Button variant="text" type="button" icon="plus">
        Icon left
      </Button>
      <Button variant="text" type="button" icon="chevronRight" iconAlignment="right">
        Icon right
      </Button>
      <Button variant="text" type="button" size="small">
        Small button
      </Button>
      <Button variant="text" type="button" icon="close" size="small">
        Small icon left
      </Button>
      <Button variant="text" type="button" icon="chevronRight" iconAlignment="right" size="small">
        Small icon right
      </Button>
    </Example>
  );
};

export default TextStyle;
