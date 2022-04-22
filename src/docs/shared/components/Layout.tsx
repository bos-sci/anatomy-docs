import { ReactNode } from 'react';
import SkipLink from '../../../library/components/SkipLink';
import logo from "../../../assets/images/logo-bsc.svg";
import NavPrimary from '../../../library/components/navigation/navPrimary/NavPrimary';

interface Props {
  children: ReactNode;
}

const navItems = [
  {
    text: 'Home',
    slug: '/'
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

const Layout = (props: Props): JSX.Element => {
  return <>
    <SkipLink destinationId="mainContent" destination="main content"/>
    <NavPrimary navItems={navItems} hasSearch={false} />
    { props.children }
    <footer className="app-footer">
      <img src={logo} className="footer-logo" alt="Boston Scientific"/>
    </footer>
  </>;
}

export default Layout;