import Button from '../../../../library/components/Button';
import Dropdown from '../../../../library/components/Dropdown';
import Icon from '../../../../library/components/icon/Icon';
import Example from '../../../shared/components/Example';

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
