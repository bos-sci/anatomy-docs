import Button from '../../../../library/components/Button';
import Icon from '../../../../library/components/icon/Icon';

const Default = () => {

  return <>
    <Button type="button">Default button</Button>
    <Button type="button" disabled>Disabled button</Button>
    <Button type="button">
      <Icon name="plus" className="u-icon-left" size="2x"/>
      Icon left
    </Button>
    <Button type="button" icon="plus" aria-label="icon button"/>
    <Button type="button" icon="plus" aria-label="icon button" disabled/>
  </>;
}

export default Default;