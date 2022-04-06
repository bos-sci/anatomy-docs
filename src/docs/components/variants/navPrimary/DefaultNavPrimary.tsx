import NavPrimary from '../../../../library/components/navigation/navPrimary/NavPrimary';

import exampleData from './structure';

const utilityItems = [
  {
    text: 'Item 1',
    slug: '/'
  },
  {
    text: 'Item 2',
    href: 'https://www.bbc.com/'
  },
  {
    text: 'Item 3',
    slug: '/'
  },
];

const DefaultNavPrimary = (): JSX.Element => {
  return (
    <NavPrimary navItems={exampleData} utilityItems={utilityItems} />
  );
}

export default DefaultNavPrimary;