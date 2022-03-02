import { ReactNode } from 'react';
import NavPrimary from './navPrimary/NavPrimary'
import logo from "../../../assets/images/logo-bsc.svg";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props): JSX.Element => {
  return <>
    <NavPrimary />
    { props.children }
    <footer className="app-footer">
      <img src={logo} className="footer-logo" alt="Boston Scientific"/>
    </footer>
  </>;
}

export default Layout;