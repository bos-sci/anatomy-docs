import Breadcrumb from '../../../../library/components/Breadcrumb';
import Example from '../../../shared/components/Example';

const DefaultBreadcrumbs = (): JSX.Element => {
  const crumbs = [
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
    <Example>
      <Breadcrumb crumbs={crumbs} currentPage="Current Page" />
    </Example>
  );
}

export default DefaultBreadcrumbs;