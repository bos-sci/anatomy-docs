import Button from '../../../../library/components/Button';
import Icon from '../../../../library/components/icon/Icon';

const Default = () => {
  const clickHandler = () => {
    console.log('Clicked');
  }

  return <>
    <Button type="button" onClick={clickHandler}>Default button</Button>
    <Button type="button" disabled>Disabled button</Button>
    <Button type="button"><Icon name="plus" className="u-icon-left" />Icon on left</Button>
    <Button type="button" icon="plus" aria-label="icon button" />
  </>;
}

export default Default;