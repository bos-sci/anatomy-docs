import { Button } from '@boston-scientific/anatomy-react';
import { DropdownMenu } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const HighlightDropdown = (): JSX.Element => {
  return (
    <Example>
      <DropdownMenu triggerText="Dropdown trigger" highlightedAction={<Button>Highlighted action</Button>}>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <Button>Action 3</Button>
      </DropdownMenu>
    </Example>
  );
};

export default HighlightDropdown;
