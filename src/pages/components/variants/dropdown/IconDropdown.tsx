import { Button } from '@boston-scientific/anatomy-react';
import { Dropdown } from '@boston-scientific/anatomy-react';
import { Icon } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const IconDropdown = (): JSX.Element => {
  return (
    <Example>
      <Dropdown triggerText="Dropdown trigger" icon="ellipsis">
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

export default IconDropdown;
