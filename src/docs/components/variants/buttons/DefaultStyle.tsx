import Button from '../../../../library/components/Button';
import Example from '../../../shared/components/Example';

const DefaultStyle = (): JSX.Element => {
  return (
    <Example>
      <Button type="button">Text button</Button>
        <Button type="button" icon="plus">
          Icon left
        </Button>
        <Button type="button" icon="chevronRight" iconAlignment="right">
          Icon right
        </Button>
        <Button type="button" icon="plus" aria-label="icon button" />
    </Example>
  );
}

export default DefaultStyle;