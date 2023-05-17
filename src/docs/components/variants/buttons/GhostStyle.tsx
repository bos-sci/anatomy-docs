import Button from '../../../../library/components/Button';
import Example from '../../../shared/components/Example';

const GhostStyle = (): JSX.Element => {
  return (
    <Example isFlex isDarkTheme>
      <Button variant="ghost" type="button">
        Text button
      </Button>
      <Button variant="ghost" type="button" icon="plus">
        Icon left
      </Button>
      <Button variant="ghost" type="button" icon="chevronRight" iconAlignment="right">
        Icon right
      </Button>
      <Button variant="ghost" type="button" icon="plus" aria-label="icon button" />
    </Example>
  );
};

export default GhostStyle;
