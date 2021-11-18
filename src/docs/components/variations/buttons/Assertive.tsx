import Button from '../../../../library/components/Button';

const Assertive = () => {
  return <>
    <Button variant="assertive" type="button">Default button</Button>
    <Button variant="assertive" type="button" disabled>Disabled button</Button>
    <Button variant="assertive" type="button" icon="plus">
      Icon left
    </Button>
    <Button variant="assertive" type="button" icon="chevronRight" iconAlignment="right">
      Icon right
    </Button>
    <Button variant="assertive" type="button" icon="plus" aria-label="icon button"/>
    <Button variant="assertive" type="button" icon="plus" aria-label="icon button" disabled/>
  </>;
}

export default Assertive;