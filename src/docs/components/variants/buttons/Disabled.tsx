import Button from '../../../../library/components/Button';

const Disabled = (): JSX.Element => {
  return <>
    <Button type="button" disabled>Default button</Button>
    <Button variant="assertive" type="button" disabled>Assertive button</Button>
    <Button variant="subtle" type="button" disabled>Subtle button</Button>
    <Button variant="ghost" type="button" disabled>Ghost button</Button>
  </>;
}

export default Disabled;