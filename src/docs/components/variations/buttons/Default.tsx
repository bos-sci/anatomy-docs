import Button from '../../../../library/components/Button';
import Icon from '../../../../library/components/icon/Icon';

const Default = () => {
  const clickHandler = () => {
    console.log('Clicked');
  }

  return <>
    <Button type="button" onClick={clickHandler}>Default Button</Button>
    <Button type="button" disabled>Disabled Button</Button>
    <Button type="button"><Icon name="plus" className="u-icon-left" />Icon Button</Button>
    <Button type="button" icon={true}><Icon name="plus" /></Button>
  </>;
}

export default Default;