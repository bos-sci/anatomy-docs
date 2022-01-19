import Button from '../../../../library/components/Button';

const Assertive = (): JSX.Element => {
  return <>
    <Button variant="assertive" type="button">Default button</Button>
    <Button variant="assertive" type="button" icon="plus">
      Icon left
    </Button>
    <Button variant="assertive" type="button" icon="chevronRight" iconAlignment="right">
      Icon right
    </Button>
    <Button variant="assertive" type="button" icon="plus" aria-label="icon button"/>
  </>;
}

export default Assertive;