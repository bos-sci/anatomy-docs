import Breadcrumb from '../../../../library/components/Breadcrumb';

const Default = () => {
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
  return <Breadcrumb crumbs={crumbs} currentPage="Current Page" />;
}

export default Default;