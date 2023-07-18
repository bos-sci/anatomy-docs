import { useState, useEffect, useRef, RefObject } from 'react';
import Button from 'library/components/Button';
import NavSecondaryList from './NavSecondaryList';
import { NavNode } from './NavSecondary';

interface NavParentProps {
  navItem: NavNode;
  activeParent: NavNode | null;
  activeParentRef: RefObject<HTMLButtonElement> | null;
  setActiveParentRef: (ref: RefObject<HTMLButtonElement> | null) => unknown;
  expandedChild: (node: NavNode | null) => unknown;
}

let navParentId = 0;

const NavSecondaryListParent = ({
  navItem,
  activeParent,
  activeParentRef,
  setActiveParentRef,
  expandedChild
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
        onClick={() => expandedChild(navItem)}
      >
        {navItem.text}
      </Button>
      {!!navItem.children && (
        <NavSecondaryList
          navListId={navListId}
          navItems={navItem.children}
          parent={navItem}
          activeParent={activeParent}
          activeParentRef={activeParentRef}
          setActiveParentRef={setActiveParentRef}
          expandedChild={expandedChild}
        />
      )}
    </li>
  );
};

export default NavSecondaryListParent;
