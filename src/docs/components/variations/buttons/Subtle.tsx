import Button from '../../../../library/components/Button';
import Icon from '../../../../library/components/icon/Icon';

const Subtle = () => {
  return <>
    <Button variant="subtle" type="button">Default button</Button>
    <Button variant="subtle" type="button" disabled>Disabled button</Button>
    <Button variant="subtle" type="button" icon="plus">
      Icon left
    </Button>
    <Button variant="subtle" type="button" icon="chevronRight" iconAlignment="right">
      Icon right
    </Button>
    <Button variant="subtle" type="button" icon="plus" aria-label="icon button"/>
    <Button variant="subtle" type="button" icon="plus" aria-label="icon button" disabled/>
  </>;
}

export default Subtle;