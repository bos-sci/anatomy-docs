import { Button } from '@boston-scientific/anatomy-react';
import { Dropdown } from '@boston-scientific/anatomy-react';
import { Icon } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const AssertiveDropdown = (): JSX.Element => {
  return (
    <Example isFlex>
      <Dropdown variant="assertive" triggerText="Dropdown trigger">
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <Button>Action 3</Button>
      </Dropdown>
      <Dropdown variant="assertive" triggerText="Dropdown trigger" icon="ellipsis">
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
      </Dropdown>
    </Example>
  );
};

export default AssertiveDropdown;
