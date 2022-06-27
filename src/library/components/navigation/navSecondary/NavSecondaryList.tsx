import { NavLink } from 'react-router-dom';
import NavSecondaryListParent from './NavSecondaryListParent';
import { NavNode } from './NavSecondary';

interface NavListProps {
  navListId?: string;
  navItems: NavNode[];
  parent: NavNode | null;
  activeParent: NavNode | null;
  openChild: (node: NavNode | null) => any;
}

const NavSecondaryList = ({ navListId, navItems, parent, activeParent, openChild }: NavListProps) => {
  return (
    <ul id={navListId} className={`ads-nav${parent?.text === activeParent?.text ? ' ads-nav-active-list' : ''}`}>
      {navItems.map((navItem, i) => {
        if (navItem.slug) {
          return (
            <li key={`secondaryNavItem${i}`} className="ads-nav-item">
              <NavLink
                to={navItem.slug}
                className="ads-nav-link"
              >
                {navItem.text}
              </NavLink>
            </li>
          )
        } else {
          return <NavSecondaryListParent key={`secondaryNavItem${i}`} navItem={navItem} activeParent={activeParent} openChild={openChild} />;
        }
      })}
    </ul>
  );
}

export default NavSecondaryList;