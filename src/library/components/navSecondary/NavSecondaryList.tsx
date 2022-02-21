import { NavLink } from 'react-router-dom';
import IconChevronLeft from '../icon/icons/IconChevronLeft';
import Button from '../Button';
import NavSecondaryListParent from './NavSecondaryListParent';
import { NavNode } from './NavSecondary';

interface NavListProps {
  navListId?: string;
  navItems: NavNode[];
  parent: NavNode | null;
  activeParent: NavNode | null;
  setActiveParent: (node: NavNode | null) => any;
}

const NavSecondaryList = ({ navListId, navItems, parent, activeParent, setActiveParent }: NavListProps) => {
  return (
    <ul id={navListId} className={`nav${parent?.text === activeParent?.text ? ' nav-active-list' : ''}`}>
      {activeParent && (
        <li className="nav-item">
          <Button className="nav-link--back" variant="subtle" onClick={() => setActiveParent(parent?.parent || null)}>
            <IconChevronLeft className="ads-icon-md u-icon-left" />
            Back
          </Button>
        </li>
      )}
      {navItems.map((navItem, i) => {
        if (navItem.slug) {
          return (
            <li key={`secondaryNavItem${i}`} className="nav-item">
              <NavLink
                to={navItem.slug}
                className="nav-link"
              >
                {navItem.text}
              </NavLink>
            </li>
          )
        } else {
          return <NavSecondaryListParent key={`secondaryNavItem${i}`} navItem={navItem} activeParent={activeParent} setActiveParent={setActiveParent} />;
        }
      })}
    </ul>
  );
}

export default NavSecondaryList;