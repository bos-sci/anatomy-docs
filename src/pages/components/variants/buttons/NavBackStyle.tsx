import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const NavBackStyle = (): JSX.Element => {
  return (
    <Example isFlex>
      <Button type="button" className="bsds-button-nav-back">
        Back button
      </Button>
      <Button type="button" className="bsds-button-nav-back bsds-button-small">
        Small back button
      </Button>
    </Example>
  );
};

export default NavBackStyle;
