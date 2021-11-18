import Button from '../../../../library/components/Button';
import Icon from '../../../../library/components/icon/Icon';

const Ghost = () => {
  return <>
    <Button variant="ghost" type="button">Default button</Button>
    <Button variant="ghots" type="button" disabled>Disabled button</Button>
    <Button variant="ghost" type="button" icon="plus">
      Icon left
    </Button>
    <Button variant="ghost" type="button" icon="chevronRight" iconAlignment="right">
      Icon right
    </Button>
    <Button variant="ghost" type="button" icon="plus" aria-label="icon button"/>
    <Button variant="ghost" type="button" icon="plus" aria-label="icon button" disabled/>
  </>;
}

export default Ghost;