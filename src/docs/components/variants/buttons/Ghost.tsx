import Button from '../../../../library/components/Button';

const Ghost = (): JSX.Element => {
  return <>
    <Button variant="ghost" type="button">Default button</Button>
    <Button variant="ghost" type="button" icon="plus">
      Icon left
    </Button>
    <Button variant="ghost" type="button" icon="chevronRight" iconAlignment="right">
      Icon right
    </Button>
    <Button variant="ghost" type="button" icon="plus" aria-label="icon button"/>
  </>;
}

export default Ghost;