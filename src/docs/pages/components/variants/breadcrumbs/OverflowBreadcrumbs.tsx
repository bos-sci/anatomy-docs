import Breadcrumb, { Crumb } from 'library/components/Breadcrumb';
import Example from 'docs/shared/components/Example';

const OverflowBreadcrumbs = (): JSX.Element => {
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
      <Breadcrumb crumbs={crumbs} currentPage="Current page" />
    </Example>
  );
};

export default OverflowBreadcrumbs;