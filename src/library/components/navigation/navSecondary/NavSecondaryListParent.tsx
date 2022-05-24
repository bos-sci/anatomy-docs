import { useState, useEffect } from 'react';
import Button from '../../Button';
import NavSecondaryList from './NavSecondaryList';
import { NavNode } from './NavSecondary';

interface NavParentProps {
  navItem: NavNode;
  activeParent: NavNode | null;
  setActiveParent: (node: NavNode | null) => any;
}

let navParentId = 0;

const NavSecondaryListParent = ({ navItem, activeParent, setActiveParent }: NavParentProps) => {

  const [navListId, setNavListId] = useState('');

  useEffect(() => {
    const idNum = ++navParentId;
    setNavListId('navItemList' + idNum);
  }, []);

  return (
    <li className="nav-item-parent">
      <Button
        variant="subtle"
        className="nav-link-parent-trigger nav-link"
        aria-expanded={navItem === activeParent}
        aria-controls={navListId}
        onClick={() => setActiveParent(navItem)}
      >
        {navItem.text}
      </Button>
      <NavSecondaryList navListId={navListId} navItems={navItem.children!} parent={navItem} activeParent={activeParent} setActiveParent={setActiveParent} />
    </li>
  );
}

export default NavSecondaryListParent;