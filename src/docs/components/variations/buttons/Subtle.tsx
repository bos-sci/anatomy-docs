import Button from '../../../../library/components/Button';

const Subtle = () => {
  const clickHandler = () => {
    console.log('Clicked');
  }

  return <Button variant="subtle" ype="button" onClick={clickHandler}>Subtle Button</Button>;
}

export default Subtle;