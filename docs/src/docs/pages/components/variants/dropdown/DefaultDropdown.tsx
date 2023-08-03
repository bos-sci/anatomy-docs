import Button from 'library/components/Button';
import Dropdown from 'library/components/Dropdown';
import Example from 'docs/shared/components/Example';

const DefaultDropdown = (): JSX.Element => {
  return (
    <Example>
      <Dropdown triggerText="Dropdown trigger">
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <Button>Action 3</Button>
      </Dropdown>
    </Example>
  );
};

export default DefaultDropdown;
