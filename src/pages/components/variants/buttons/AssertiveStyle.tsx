import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const AssertiveStyle = (): JSX.Element => {
  return (
    <Example isFlex>
      <Button variant="assertive" type="button">
        Button
      </Button>
      <Button variant="assertive" type="button" icon="plus">
        Icon left
      </Button>
      <Button variant="assertive" type="button" icon="chevronRight" iconAlignment="right">
        Icon right
      </Button>
      <Button variant="assertive" type="button" icon="plus" aria-label="icon button" />
      <Button variant="assertive" type="button" size="small">
        Small button
      </Button>
      <Button variant="assertive" type="button" icon="close" size="small">
        Small icon left
      </Button>
      <Button variant="assertive" type="button" icon="chevronRight" iconAlignment="right" size="small">
        Small icon right
      </Button>
    </Example>
  );
};

export default AssertiveStyle;
