import { Button } from '@boston-scientific/anatomy-react';
import { DropdownMenu } from '@boston-scientific/anatomy-react';
import { Icon } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const AssertiveDropdown = (): JSX.Element => {
  return (
    <Example isFlex>
      <DropdownMenu variant="assertive" triggerText="Dropdown trigger">
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <Button>Action 3</Button>
      </DropdownMenu>
      <DropdownMenu variant="assertive" triggerText="Dropdown trigger" icon="ellipsis">
        <Button>
          <Icon name="plus" size="2x" className="bsds-icon-left" />
          Action 1
        </Button>
        <Button>
          <Icon name="plus" size="2x" className="bsds-icon-left" />
          Action 2
        </Button>
        <Button>
          <Icon name="plus" size="2x" className="bsds-icon-left" />
          Action 3
        </Button>
      </DropdownMenu>
    </Example>
  );
};

export default AssertiveDropdown;
