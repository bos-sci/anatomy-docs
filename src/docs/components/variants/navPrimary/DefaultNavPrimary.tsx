import NavPrimary from '../../../../library/components/navigation/navPrimary/NavPrimary';
import useTitle from '../../../shared/hooks/useTitle';

import logoBSC from '../../../../assets/images/logo-bsc-tagline.svg';
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
  },
  {
    text: 'Region Selector',
    children: [
      {
        text: 'Argentina',
        slug: '/'
      },
      {
        text: 'Brazil',
        slug: '/'
      },
      {
        text: 'Chile',
        slug: '/'
      },
      {
        text: 'China',
        slug: '/'
      },
      {
        text: 'Columbia',
        slug: '/'
      },
      {
        text: 'Deutschland',
        slug: '/'
      },
      {
        text: 'Europe',
        slug: '/'
      },
      {
        text: 'India',
        slug: '/'
      },
      {
        text: 'Japan',
        slug: '/'
      },
      {
        text: 'Korea',
        slug: '/'
      },
      {
        text: 'Malaysia',
        slug: '/'
      },
      {
        text: 'Mexico',
        slug: '/'
      },
      {
        text: 'Peru',
        slug: '/'
      },
      {
        text: 'Spain',
        slug: '/'
      },
      {
        text: 'United States',
        slug: '/'
      }
    ]
  }
];

const logo = {
  src: logoBSC,
  alt: 'Boston scientific logo',
  to: '/',
  ariaLabel: 'Boston scientific home'
}

const DefaultNavPrimary = (): JSX.Element => {
  useTitle({titlePrefix: `Example Primary Navigation - Components`});
  return (
    <NavPrimary logo={logo} navItems={navPrimaryData} utilityItems={utilityItems} />
  );
}

export default DefaultNavPrimary;