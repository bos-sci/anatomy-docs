import Link from 'library/components/Link';
import Example from 'docs/shared/components/Example';

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
