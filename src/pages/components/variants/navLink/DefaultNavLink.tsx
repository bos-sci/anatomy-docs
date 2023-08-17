import { Link } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultLink = (): JSX.Element => {
  return (
    <Example>
      <Link href="docs-demo-link" className="bsds-link-nav">
        Navigation link
      </Link>
    </Example>
  );
};

export default DefaultLink;
