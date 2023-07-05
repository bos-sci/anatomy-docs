import Link from 'library/components/Link';
import Example from 'docs/shared/components/Example';

const GhostStyle = (): JSX.Element => {
  return (
    <Example isDarkTheme>
      <Link href="docs-demo-link" variant="ghost">
        Ghost link
      </Link>
    </Example>
  );
};

export default GhostStyle;
