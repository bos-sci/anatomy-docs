import Breadcrumb, { Crumb } from '../../../../library/components/Breadcrumb';
import Example from '../../../shared/components/Example';

const DefaultBreadcrumbs = (): JSX.Element => {
  const crumbs: Crumb[] = [
    {
      name: 'Great grandparent page',
      href: '#'
    },
    {
      name: 'Grandparent page',
      href: '#'
    },
    {
      name: 'Parent page',
      href: '#'
    },
  ];

  return (
    <Example>
      <Breadcrumb crumbs={crumbs} currentPage="Current page" hasOverflow={false} />
    </Example>
  );
}

export default DefaultBreadcrumbs;