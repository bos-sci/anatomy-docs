import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const Disabled = (): JSX.Element => {
  return (
    <>
      <Example isFlex>
        <Button type="button" disabled>
          Default
        </Button>
        <Button variant="assertive" type="button" disabled>
          Assertive
        </Button>
        <Button variant="subtle" type="button" disabled>
          Subtle
        </Button>
      </Example>
      <Example isFlex isDarkTheme>
        <Button variant="ghost" type="button" disabled>
          Ghost
        </Button>
      </Example>
    </>
  );
};

export default Disabled;
