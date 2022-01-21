import Button from '../../../../library/components/Button';

const GhostStyle = (): JSX.Element => {
  return <>
    <Button variant="ghost" type="button">Text button</Button>
    <Button variant="ghost" type="button" icon="plus">
      Icon left
    </Button>
    <Button variant="ghost" type="button" icon="chevronRight" iconAlignment="right">
      Icon right
    </Button>
    <Button variant="ghost" type="button" icon="plus" aria-label="icon button"/>
  </>;
}

export default GhostStyle;