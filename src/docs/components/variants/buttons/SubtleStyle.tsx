import Button from '../../../../library/components/Button';
import Example from '../../../shared/components/Example';

const SubtleStyle = (): JSX.Element => {
  return (
    <Example isFlex={true}>
      <Button variant="subtle" type="button">Text button</Button>
      <Button variant="subtle" type="button" icon="plus">
        Icon left
      </Button>
      <Button variant="subtle" type="button" icon="chevronRight" iconAlignment="right">
        Icon right
      </Button>
      <Button variant="subtle" type="button" icon="plus" aria-label="icon button" />
    </Example>
  );
}

export default SubtleStyle;