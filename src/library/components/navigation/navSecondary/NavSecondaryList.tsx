import { RefObject } from 'react';
import Link from 'library/components/Link';
import NavSecondaryListParent from './NavSecondaryListParent';
import { NavNode } from './NavSecondary';

interface NavListProps {
  navListId?: string;
  navItems: NavNode[];
  parent: NavNode | null;
  activeParent: NavNode | null;
  activeParentRef: RefObject<HTMLButtonElement> | null;
  setActiveParentRef: (ref: RefObject<HTMLButtonElement> | null) => unknown;
  openChild: (node: NavNode | null) => unknown;
}

const NavSecondaryList = ({
  navListId,
  navItems,
  parent,
  activeParent,
  activeParentRef,
  setActiveParentRef,
  openChild
}: NavListProps) => {
  return (
    <ul
      id={navListId}
      className={`bsds-nav${parent?.text === activeParent?.text ? ' bsds-nav-active-list' : ''}`}
      role={parent?.text === activeParent?.text ? '' : 'none'}
    >
      {navItems.map((navItem, i) => {
        if (navItem.slug) {
          return (
            <li key={`secondaryNavItem${navItem.text}`} className="bsds-nav-item">
              <Link to={navItem.slug} href={navItem.slug} className="bsds-nav-link" isNavLink>
                {navItem.text}
              </Link>
            </li>
          );
        } else {
          return (
            <NavSecondaryListParent
              key={`secondaryNavItemParent${navItem.text}`}
              navItem={navItem}
              activeParent={activeParent}
              activeParentRef={activeParentRef}
              setActiveParentRef={setActiveParentRef}
              openChild={openChild}
            />
          );
        }
      })}
    </ul>
  );
};

export default NavSecondaryList;
