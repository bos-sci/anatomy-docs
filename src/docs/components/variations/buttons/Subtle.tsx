import Button from '../../../../library/components/Button';
import Icon from '../../../../library/components/icon/Icon';

const Subtle = () => {
  return <>
    <Button type="button" variant="subtle">Subtle button</Button>
    <Button type="button" variant="subtle" disabled>Disabled button</Button>
    <Button type="button" variant="subtle"><Icon name="plus" className="u-icon-left" /> Icon on left</Button>
    <Button type="button" variant="subtle" icon="plus" aria-label="icon button" />
  </>;
}

export default Subtle;