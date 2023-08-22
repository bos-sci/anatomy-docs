import Example from 'shared/components/Example';
import { Link } from '@boston-scientific/anatomy-react';
import { IconArrowRight } from '@boston-scientific/anatomy-react';

const CtaStyle = (): JSX.Element => {
  return (
    <Example>
      <Link href="docs-demo-link" variant="cta">
        CTA link
        <IconArrowRight className="bsds-link-cta-icon" />
      </Link>
    </Example>
  );
};

export default CtaStyle;
