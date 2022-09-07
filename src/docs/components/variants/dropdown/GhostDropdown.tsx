import Button from '../../../../library/components/Button';
import Dropdown from '../../../../library/components/Dropdown';
import DropdownHeading from '../../../../library/components/DropdownHeading';
import Icon from '../../../../library/components/icon/Icon';
import Example from '../../../shared/components/Example';

const GhostDropdown = (): JSX.Element => {

  return (
    <Example isFlex isDarkTheme>
      <Dropdown variant="ghost" triggerText='Dropdown trigger'>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <Button>Action 3</Button>
      </Dropdown>
      <Dropdown variant="ghost" triggerText='Dropdown trigger'>
        <DropdownHeading>Action group 1</DropdownHeading>
        <Button>Action 1a</Button>
        <Button>Action 1b</Button>
        <DropdownHeading>Action group 2</DropdownHeading>
        <Button>Action 2a</Button>
        <Button>Action 2b</Button>
      </Dropdown>
      <Dropdown variant="ghost" triggerText='Dropdown trigger' highlightedAction={<Button>Highlighted action</Button>}>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <Button>Action 3</Button>
      </Dropdown>
      <Dropdown variant="ghost" icon='ellipsis'>
        <Button><Icon name="plus" size="2x" className="bsds-icon-left" />Action 1</Button>
        <Button><Icon name="plus" size="2x" className="bsds-icon-left" />Action 2</Button>
        <Button><Icon name="plus" size="2x" className="bsds-icon-left" />Action 3</Button>
      </Dropdown>
    </Example>
  );
}

export default GhostDropdown;