import Button from '../../../../library/components/Button';
import Dropdown from '../../../../library/components/Dropdown';
import Example from '../../../shared/components/Example';

const HighlightDropdown = (): JSX.Element => {

  return (
    <Example>
      <Dropdown triggerText="Dropdown trigger" highlightedAction={<Button>Highlighted action</Button>}>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <Button>Action 3</Button>
      </Dropdown>
    </Example>
  );
}

export default HighlightDropdown;