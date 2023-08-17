import { Button } from '@boston-scientific/anatomy-react';
import { Dropdown } from '@boston-scientific/anatomy-react';
import { DropdownGroupName } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const GroupDropdown = (): JSX.Element => {
  return (
    <Example>
      <Dropdown triggerText="Dropdown trigger">
        <DropdownGroupName>Action group 1</DropdownGroupName>
        <Button>Action 1a</Button>
        <Button>Action 1b</Button>
        <DropdownGroupName>Action group 2</DropdownGroupName>
        <Button>Action 2a</Button>
        <Button>Action 2b</Button>
      </Dropdown>
    </Example>
  );
};

export default GroupDropdown;
