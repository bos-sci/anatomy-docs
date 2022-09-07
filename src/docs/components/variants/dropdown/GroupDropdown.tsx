import Button from '../../../../library/components/Button';
import Dropdown from '../../../../library/components/Dropdown';
import DropdownHeading from '../../../../library/components/DropdownHeading';
import Example from '../../../shared/components/Example';

const GroupDropdown = (): JSX.Element => {

  return (
    <Example>
      <Dropdown triggerText='Dropdown trigger'>
        <DropdownHeading>Action group 1</DropdownHeading>
        <Button>Action 1a</Button>
        <Button>Action 1b</Button>
        <DropdownHeading>Action group 2</DropdownHeading>
        <Button>Action 2a</Button>
        <Button>Action 2b</Button>
      </Dropdown>
    </Example>
  );
}

export default GroupDropdown;