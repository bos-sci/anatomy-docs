import Button from '../../../../library/components/Button';
import DropdownMenu from '../../../../library/components/DropdownMenu';
import DropdownMenuHeading from '../../../../library/components/DropdownMenuHeading';
import Example from '../../../shared/components/Example';

const DefaultDropdownMenu = (): JSX.Element => {

  return (
    <Example>
      <DropdownMenu triggerText='Trigger menu text' highlightedAction={<Button>Highlighted Action</Button>}>
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </DropdownMenu>
    </Example>
  );
}

export default DefaultDropdownMenu;