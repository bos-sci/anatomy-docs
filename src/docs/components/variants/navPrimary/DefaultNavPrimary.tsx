import NavPrimary from '../../../../library/components/navigation/navPrimary/NavPrimary';
import useTitle from '../../../shared/hooks/useTitle';

import navPrimaryData from './navPrimaryData';

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
  useTitle({titlePrefix: `Example Primary Navigation - Components`});
  return (
    <NavPrimary navItems={navPrimaryData} utilityItems={utilityItems} />
  );
}

export default DefaultNavPrimary;