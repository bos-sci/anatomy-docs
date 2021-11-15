import Button from '../../../../library/components/Button';
import Icon from '../../../../library/components/icon/Icon';

const Ghost = () => {
  return <>
    <Button type="button" variant="ghost">Ghost Button</Button>
    <Button type="button" variant="ghost" disabled>Disabled Button</Button>
    <Button type="button" variant="ghost"><Icon name="plus" className="u-icon-left" /> Icon Button</Button>
    <Button type="button" variant="ghost" icon={true}><Icon name="plus" /></Button>
  </>;
}

export default Ghost;