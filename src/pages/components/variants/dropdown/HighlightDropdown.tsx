import { Button } from '@boston-scientific/anatomy-react';
import { Dropdown } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

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
};

export default HighlightDropdown;
