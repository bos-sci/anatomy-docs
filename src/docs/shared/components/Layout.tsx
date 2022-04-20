import { ReactNode } from 'react';
import SkipLink from '../../../library/components/SkipLink';
import NavPrimary from './navPrimary/NavPrimary'
import logo from "../../../assets/images/logo-bsc.svg";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props): JSX.Element => {
  return <>
    <SkipLink destinationId="mainContent" destination="main content"/>
    <NavPrimary />
    { props.children }
    <footer className="app-footer">
      <img src={logo} className="footer-logo" alt="Boston Scientific"/>
    </footer>
  </>;
}

export default Layout;