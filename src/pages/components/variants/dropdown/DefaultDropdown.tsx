import { Button } from '@boston-scientific/anatomy-react';
import { Dropdown } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultDropdown = (): JSX.Element => {
  return (
    <Example>
      <Dropdown triggerText="Dropdown trigger">
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <Button>Action 3</Button>
      </Dropdown>
    </Example>
  );
};

export default DefaultDropdown;
