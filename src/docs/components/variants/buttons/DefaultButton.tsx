import Button from '../../../../library/components/Button';
import Example from '../../../shared/components/Example';

const DefaultButton = (): JSX.Element => {
  return (
    <Example isFlex={true}>
      <Button type="button">Text button</Button>
    </Example>
  );
}

export default DefaultButton;