import { useState, useEffect, useRef, RefObject } from 'react';
import Button from '../../Button';
import NavSecondaryList from './NavSecondaryList';
import { NavNode } from './NavSecondary';

interface NavParentProps {
  navItem: NavNode;
  activeParent: NavNode | null;
  activeParentRef: RefObject<HTMLButtonElement> | null;
  setActiveParentRef: (ref: RefObject<HTMLButtonElement> | null) => any;
  openChild: (node: NavNode | null) => any;
}

let navParentId = 0;

const NavSecondaryListParent = ({
  navItem,
  activeParent,
  activeParentRef,
  setActiveParentRef,
  openChild,
}: NavParentProps) => {
  const [navListId, setNavListId] = useState('');
  const parentBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (navItem === activeParent) {
      setActiveParentRef(parentBtnRef);
    }
  }, [activeParent, navItem, setActiveParentRef]);

  useEffect(() => {
    const idNum = ++navParentId;
    setNavListId('navItemList' + idNum);
  }, []);

  return (
    <li className="bsds-nav-item-parent">
      <Button
        ref={parentBtnRef}
        variant="subtle"
        className="bsds-nav-link"
        aria-expanded={navItem === activeParent}
        aria-controls={navListId}
        onClick={() => openChild(navItem)}
      >
        {navItem.text}
      </Button>
      <NavSecondaryList
        navListId={navListId}
        navItems={navItem.children!}
        parent={navItem}
        activeParent={activeParent}
        activeParentRef={activeParentRef}
        setActiveParentRef={setActiveParentRef}
        openChild={openChild}
      />
    </li>
  );
};

export default NavSecondaryListParent;
