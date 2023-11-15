import Example from 'shared/components/Example';
import { Link } from '@boston-scientific/anatomy-react';

const MailtoStyle = (): JSX.Element => {
  return (
    <Example>
      <Link href="docs-demo-link" variant="mailto">
        Mailto CTA link
      </Link>
    </Example>
  );
};

export default MailtoStyle;
