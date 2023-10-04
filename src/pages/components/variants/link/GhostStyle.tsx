import { Link } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

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
