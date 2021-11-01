import Button from '../../../../library/components/Button';

const Ghost = () => {
  const clickHandler = () => {
    console.log('Clicked');
  }

  return <Button variant="ghost" type="button" onClick={clickHandler}>Ghost Button</Button>;
}

export default Ghost;