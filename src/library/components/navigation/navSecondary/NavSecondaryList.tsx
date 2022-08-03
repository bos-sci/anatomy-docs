import { NavLink } from 'react-router-dom';
import NavSecondaryListParent from './NavSecondaryListParent';
import { NavNode } from './NavSecondary';
import { RefObject } from 'react';

interface NavListProps {
  navListId?: string;
  navItems: NavNode[];
  parent: NavNode | null;
  activeParent: NavNode | null;
  activeParentRef: RefObject<HTMLButtonElement> | null;
  setActiveParentRef: (ref: RefObject<HTMLButtonElement> | null) => any;
  openChild: (node: NavNode | null) => any;
}

const NavSecondaryList = ({ navListId, navItems, parent, activeParent, activeParentRef, setActiveParentRef, openChild }: NavListProps) => {
  return (
    <ul id={navListId} className={`lib-nav${parent?.text === activeParent?.text ? ' lib-nav-active-list' : ''}`} role={parent?.text === activeParent?.text ? '' : 'none'}>
      {navItems.map((navItem, i) => {
        if (navItem.slug) {
          return (
            <li key={`secondaryNavItem${i}`} className="lib-nav-item">
              <NavLink
                to={navItem.slug}
                className="lib-nav-link"
              >
                {navItem.text}
              </NavLink>
            </li>
          )
        } else {
          return <NavSecondaryListParent key={`secondaryNavItem${i}`} navItem={navItem} activeParent={activeParent} activeParentRef={activeParentRef} setActiveParentRef={setActiveParentRef} openChild={openChild} />;
        }
      })}
    </ul>
  );
}

export default NavSecondaryList;