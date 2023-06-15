import Button from '../../../../library/components/Button';
import Example from '../../../shared/components/Example';

const DefaultStyle = (): JSX.Element => {
  return (
    <Example isFlex>
      <Button type="button">Text button</Button>
      <Button type="button" icon="plus">
        Icon left
      </Button>
      <Button type="button" icon="chevronRight" iconAlignment="right">
        Icon right
      </Button>
      <Button type="button" icon="plus" aria-label="icon button" />
      <Button type="button" size="small">
        Small button
      </Button>
      <Button type="button" icon="close" size="small">
        Small icon left
      </Button>
      <Button type="button" icon="chevronRight" iconAlignment="right" size="small">
        Small icon right
      </Button>
    </Example>
  );
};

export default DefaultStyle;
