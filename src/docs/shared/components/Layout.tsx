import { ReactNode } from 'react';
import SkipLink from '../../../library/components/SkipLink';
import logoADS from "../../../assets/images/logo-anatomy.svg";
import logoBSC from "../../../assets/images/logo-bsc.svg";
import NavPrimary, { NavItemPrimary } from '../../../library/components/navigation/navPrimary/NavPrimary';

interface Props {
  children: ReactNode;
}

const navItems: NavItemPrimary[] = [
  {
    text: 'Home',
    slug: '/',
    isExactMatch: true
  },
  {
    text: 'Content',
    slug: '/content'
  },
  {
    text: 'Foundations',
    slug: '/foundations'
  },
  {
    text: 'Components',
    slug: '/components'
  },
  {
    text: 'Code Standards',
    slug: '/resources/developers/code-standards'
  },
  {
    text: 'Resources',
    slug: '/resources'
  }
];

const logo = {
  src: logoADS,
  alt: 'Anatomy design system logo',
  to: '',
  ariaLabel: 'Anatomy design system home'
};

const Layout = (props: Props): JSX.Element => {
  return <>
    <SkipLink destinationId="mainContent" destination="main content"/>
    <NavPrimary logo={logo} navItems={navItems} hasSearch={false} />
    { props.children }
    <footer className="app-footer">
      <img src={logoBSC} className="footer-logo" alt="Boston Scientific"/>
    </footer>
  </>;
}

export default Layout;