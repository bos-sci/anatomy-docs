import Button from 'library/components/Button';
import Example from 'docs/shared/components/Example';

const Icon = (): JSX.Element => {
  return (
    <Example isFlex>
      <Button type="button" icon="plus" aria-label="icon button" />
    </Example>
  );
};

export default Icon;
