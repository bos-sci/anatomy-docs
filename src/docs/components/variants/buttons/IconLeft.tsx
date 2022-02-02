import Button from '../../../../library/components/Button';
import Example from '../../../shared/components/Example';

const IconLeft = (): JSX.Element => {
  return (
    <Example isFlex={true}>
      <Button type="button" icon="plus">Icon left</Button>
    </Example>
  );
}

export default IconLeft;