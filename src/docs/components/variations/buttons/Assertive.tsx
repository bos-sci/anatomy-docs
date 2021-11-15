import Button from '../../../../library/components/Button';
import Icon from '../../../../library/components/icon/Icon';

const Assertive = () => {
  return <>
    <Button type="button" variant="assertive">Assertive button</Button>
    <Button type="button" variant="assertive" disabled>Disabled button</Button>
    <Button type="button" variant="assertive">Icon on right <Icon name="chevronRight" className="u-icon-right" size="lg" /></Button>
    <Button type="button" variant="assertive" icon="plus" aria-label="icon button" />
  </>;
}

export default Assertive;