import Button from 'library/components/Button';
import Example from 'docs/shared/components/Example';

const AssertiveStyle = (): JSX.Element => {
  return (
    <Example isFlex>
      <Button variant="assertive" type="button">
        Text button
      </Button>
      <Button variant="assertive" type="button" icon="plus">
        Icon left
      </Button>
      <Button variant="assertive" type="button" icon="chevronRight" iconAlignment="right">
        Icon right
      </Button>
      <Button variant="assertive" type="button" icon="plus" aria-label="icon button" />
    </Example>
  );
};

export default AssertiveStyle;
