import Button from '../../../../library/components/Button';
import Icon from '../../../../library/components/icon/Icon';

const Assertive = () => {
  return <>
    <Button type="button" variant="assertive">Assertive Button</Button>
    <Button type="button" variant="assertive" disabled>Disabled Button</Button>
    <Button type="button" variant="assertive"><Icon name="plus" className="u-icon-left" /> Icon Button</Button>
    <Button type="button" variant="assertive" icon={true}><Icon name="plus" /></Button>
  </>;
}

export default Assertive;