import Button from '../../../../library/components/Button';

const Subtle = (): JSX.Element => {
  return <>
    <Button variant="subtle" type="button">Default button</Button>
    <Button variant="subtle" type="button" icon="plus">
      Icon left
    </Button>
    <Button variant="subtle" type="button" icon="chevronRight" iconAlignment="right">
      Icon right
    </Button>
    <Button variant="subtle" type="button" icon="plus" aria-label="icon button"/>
  </>;
}

export default Subtle;