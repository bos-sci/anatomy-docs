import Button from 'library/components/Button';
import Dropdown from 'library/components/Dropdown';
import DropdownGroupName from 'library/components/DropdownGroupName';
import Example from 'docs/shared/components/Example';

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
