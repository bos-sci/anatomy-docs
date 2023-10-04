import { SkipLink } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';
import useTitle from 'shared/hooks/useTitle';

const DefaultSkipLink = (): JSX.Element => {
  useTitle({ titlePrefix: `Example Skip Link - Components` });
  return (
    <Example isFlush>
      <SkipLink destinationId="mainContent" destination="main content" />
      <header className="docs-wire-header">
        <p>Header area</p>
        <a href="docs-demo-link">Example header link</a>
      </header>
      <main id="mainContent" className="docs-wire-main">
        <p>Main content area</p>
        <a href="docs-demo-link">Example link</a>
      </main>
    </Example>
  );
};

export default DefaultSkipLink;
