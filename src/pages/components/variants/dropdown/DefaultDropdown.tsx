import { Button } from '@boston-scientific/anatomy-react';
import { DropdownMenu } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultDropdown = (): JSX.Element => {
  return (
    <Example>
      <DropdownMenu triggerText="Dropdown trigger">
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <Button>Action 3</Button>
      </DropdownMenu>
    </Example>
  );
};

export default DefaultDropdown;
