import Button from '../../../../library/components/Button';

const Default = () => {
  const clickHandler = () => {
    console.log('Clicked');
  }

  return <Button type="button" onClick={clickHandler}>Default Button</Button>;
}

export default Default;