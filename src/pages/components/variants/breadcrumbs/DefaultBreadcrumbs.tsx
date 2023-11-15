import { Breadcrumbs, Crumb } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultBreadcrumbs = (): JSX.Element => {
  const crumbs: Crumb[] = [
    {
      name: 'Great grandparent page',
      href: 'docs-demo-link'
    },
    {
      name: 'Grandparent page',
      href: 'docs-demo-link'
    },
    {
      name: 'Parent page',
      href: 'docs-demo-link'
    }
  ];

  return (
    <Example>
      <Breadcrumbs crumbs={crumbs} currentPage="Current page" hasOverflow={false} />
    </Example>
  );
};

export default DefaultBreadcrumbs;
