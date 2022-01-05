import Button from '../../../../library/components/Button';

const Default = (): JSX.Element => {

  return <>
    <Button type="button">Default button</Button>
    <Button type="button" disabled>Disabled button</Button>
    <Button type="button" icon="plus">
      Icon left
    </Button>
    <Button type="button" icon="chevronRight" iconAlignment="right">
      Icon right
    </Button>
    <Button type="button" icon="plus" aria-label="icon button"/>
    <Button type="button" icon="plus" aria-label="icon button" disabled/>
  </>;
}

export default Default;