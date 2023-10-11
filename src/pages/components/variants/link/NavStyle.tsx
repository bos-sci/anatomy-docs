import Example from 'shared/components/Example';
import { Link } from '@boston-scientific/anatomy-react';

const NavStyle = (): JSX.Element => {
  return (
    <Example>
      <Link href="docs-demo-link" variant="nav">
        Navigation link
      </Link>
    </Example>
  );
};

export default NavStyle;
