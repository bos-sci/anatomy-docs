import { useState } from 'react';
import logo from "../../../assets/images/logo-anatomy.svg";
import { RequireOnlyOne } from '../../types';
import Button from '../Button';
import IconBars from '../icon/icons/IconBars';
import './NavPrimary.scss';
import NavPrimaryMenu from './NavPrimaryMenu';
import NavPrimaryItemRoot from './NavPrimaryItemRoot';
import NavUtility from './NavUtility';

interface NavItem {
  text: string;
  slug: string;
  href: string;
}

interface NavItemPrimaryBase extends NavItem {
  children?: NavItemPrimary[];
  description?: string;
  title?: string;
}

export type NavItemPrimary = RequireOnlyOne<NavItemPrimaryBase, 'slug' | 'href' | 'children'>;

export type NavItemUtility = RequireOnlyOne<NavItem, 'slug' | 'href'>;

interface NavTreeNode extends NavItem {
  parent: NavNode | null;
  children?: NavNode[];
}

export type NavNode = RequireOnlyOne<NavTreeNode, 'slug' | 'children'>;

interface Props {
  navItems: NavItemPrimary[];
  activeSlug?: string;
  utilityItems?: NavItemUtility[];
}

const NavPrimary = ({ utilityItems, navItems }: Props): JSX.Element => {

  const [currentRootItem, setCurrentRootItem] = useState<NavItemPrimary | null>(null);

  const updateMenu = (navItem: NavItemPrimary | null): void => {
    setCurrentRootItem(navItem);
  }

  return (
    <header>
      <a href="#mainContent" className="skip-link">Skip to main content</a>
      {utilityItems && <NavUtility utilityItems={utilityItems} />}
      <nav className="nav-primary" aria-label="primary">
        <div className="nav-header">
          <ul className="nav">
            <li className="nav-item nav-item-logo">
              <a href="#demo" className="nav-link-logo" aria-label="Boston Scientific home page">
                <img src={logo} alt="Anatomy logo" />
              </a>
            </li>
            {navItems.map(navItem => <NavPrimaryItemRoot navItem={navItem} updateMenu={updateMenu} />)}
            {/* <li className="nav-item nav-primary-search">
              Search will go here
            </li> */}
            <li className="nav-item nav-item-trigger">
              <Button variant="subtle" className="nav-link">
                <IconBars className="ads-icon-lg u-icon-left"/>
                Menu
              </Button>
            </li>
          </ul>
        </div>
        {currentRootItem?.children &&
          <NavPrimaryMenu
            navItems={currentRootItem.children}
            title={currentRootItem.title || ''}
            description={currentRootItem.description || ''} />
        }
      </nav>
    </header>
  );
}

export default NavPrimary;