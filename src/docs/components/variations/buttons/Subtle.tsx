import Button from '../../../../library/components/Button';
import Icon from '../../../../library/components/icon/Icon';

const Subtle = () => {
  return <>
    <Button type="button" variant="subtle">Subtle Button</Button>
    <Button type="button" variant="subtle" disabled>Disabled Button</Button>
    <Button type="button" variant="subtle"><Icon name="plus" className="u-icon-left" /> Icon Button</Button>
    <Button type="button" variant="subtle" icon={true}><Icon name="plus" /></Button>
  </>;
}

export default Subtle;