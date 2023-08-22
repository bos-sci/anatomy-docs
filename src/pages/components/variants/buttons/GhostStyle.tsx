import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const GhostStyle = (): JSX.Element => {
  return (
    <Example isFlex isDarkTheme>
      <Button variant="ghost" type="button">
        Text button
      </Button>
      <Button variant="ghost" type="button" icon="plus">
        Icon left
      </Button>
      <Button variant="ghost" type="button" icon="chevronRight" iconAlignment="right">
        Icon right
      </Button>
      <Button variant="ghost" type="button" icon="plus" aria-label="icon button" />
      <Button variant="ghost" type="button" size="small">
        Small button
      </Button>
      <Button variant="ghost" type="button" icon="close" size="small">
        Small icon left
      </Button>
      <Button variant="ghost" type="button" icon="chevronRight" iconAlignment="right" size="small">
        Small icon right
      </Button>
    </Example>
  );
};

export default GhostStyle;
