import Button from '../../../../library/components/Button';

const Disabled = (): JSX.Element => {
  return <>
    <Button type="button" disabled>Default</Button>
    <Button variant="assertive" type="button" disabled>Assertive</Button>
    <Button variant="subtle" type="button" disabled>Subtle</Button>
    <Button variant="ghost" type="button" disabled>Ghost</Button>
  </>;
}

export default Disabled;