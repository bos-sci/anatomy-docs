import Breadcrumb, { Crumb } from '../../../../library/components/Breadcrumb';
import Example from '../../../shared/components/Example';

const OverflowBreadcrumbs = (): JSX.Element => {
  const crumbs: Crumb[] = [
    {
      name: 'Great Grandparent Page',
      href: '#'
    },
    {
      name: 'Grandparent Page',
      href: '#'
    },
    {
      name: 'Parent Page',
      href: '#'
    },
  ];

  return (
      <Breadcrumb crumbs={crumbs} currentPage="Current Page" />
  );
}

export default OverflowBreadcrumbs;