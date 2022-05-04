import NavPrimary from '../../../../library/components/navigation/navPrimary/NavPrimary';
import useTitle from '../../../shared/hooks/useTitle';

import navPrimaryData from './navPrimaryData';

const utilityItems = [
  {
    text: 'News',
    slug: '/'
  },
  {
    text: 'Careers',
    slug: '/'
  },
  {
    text: 'Investors',
    slug: '/'
  }
];

const footerItems = [
  {
    text: 'Privacy policy',
    slug: '/'
  },
  {
    text: 'Terms of use',
    slug: '/'
  },
  {
    text: 'Copyright notice',
    slug: '/'
  },
  {
    text: 'Social media guidelines',
    slug: '/'
  }
];

const DefaultNavPrimary = (): JSX.Element => {
  useTitle({titlePrefix: `Example Primary Navigation - Components`});
  return (
    <NavPrimary navItems={navPrimaryData} utilityItems={utilityItems} footerItems={footerItems} />
  );
}

export default DefaultNavPrimary;