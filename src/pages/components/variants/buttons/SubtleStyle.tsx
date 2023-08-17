import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const SubtleStyle = (): JSX.Element => {
  return (
    <Example isFlex>
      <Button variant="subtle" type="button">
        Text button
      </Button>
      <Button variant="subtle" type="button" icon="plus">
        Icon left
      </Button>
      <Button variant="subtle" type="button" icon="chevronRight" iconAlignment="right">
        Icon right
      </Button>
      <Button variant="subtle" type="button" icon="plus" aria-label="icon button" />
      <Button variant="subtle" type="button" size="small">
        Small button
      </Button>
      <Button variant="subtle" type="button" icon="close" size="small">
        Small icon left
      </Button>
      <Button variant="subtle" type="button" icon="chevronRight" iconAlignment="right" size="small">
        Small icon right
      </Button>
    </Example>
  );
};

export default SubtleStyle;
