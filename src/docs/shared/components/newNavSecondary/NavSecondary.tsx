import { createContext, useContext, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import Button from '../../../../library/components/Button';
import Icon from '../../../../library/components/icon/Icon';
import IconArrowLeft from '../../../../library/icons/IconArrowLeft';
import IconArrowRight from '../../../../library/icons/IconArrowRight';
import "./NavSecondary.scss"

type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?:
            Required<Pick<T, K>>
            & Partial<Record<Exclude<Keys, K>, undefined>>
    }[Keys]

interface NavItem {
  text: string;
  slug?: string;
  children?: NavItemSecondary[];
}

export type NavItemSecondary = RequireOnlyOne<NavItem, 'slug' | 'children'>;

interface NavTreeNode extends NavItem {
  parent: NavNode | null;
  children?: NavNode[];
}

export type NavNode = RequireOnlyOne<NavTreeNode, 'slug' | 'children'>;

interface Props {
  navItems: NavItemSecondary[];
  currentSlug?: string;
}

const NavSecondary = ({ navItems, currentSlug }: Props): JSX.Element => {

  const [navTree, setNavTree] = useState<NavNode[]>([]);
  const [activeParent, setActiveParent] = useState<NavNode | null>(null);

  useEffect(() => {
    const tree = [...navItems] as NavNode[];

    const populateParents = (nodes: NavNode[], parent: NavNode | null = null) => {
      nodes.forEach(node => {
        node.parent = parent;
        if (node.children) {
          populateParents(node.children as NavNode[], node);
        }
      });
    }
    populateParents(tree);
    setNavTree(tree);

  }, [navItems]);

  useEffect(() => {
    if (currentSlug) {
      const findNodeBySlug = (nodes: NavNode[], slug: string): NavNode | undefined => {
        for (let i = 0; i < nodes.length; i++) {
          const node= nodes[i];
          if (node.slug === slug) {
            return node;
          } else if (node.children) {
            return findNodeBySlug(node.children, slug);
          }
        }
      }
      const currentNode = findNodeBySlug(navTree, currentSlug);
      if (currentNode) {
        setActiveParent(currentNode.parent);
      }
    }
  }, [currentSlug, navTree]);

  return (
    <nav className="nav-secondary">
      <NavList navItems={navTree} parent={null} activeParent={activeParent} setActiveParent={setActiveParent} />
    </nav>
  );
}


// ----------------- Nav List -----------------
interface NavListProps {
  navListId?: string;
  navItems: NavNode[];
  parent: NavNode | null;
  activeParent: NavNode | null;
  setActiveParent: (node: NavNode | null) => any;
}

const NavList = ({ navListId, navItems, parent, activeParent, setActiveParent }: NavListProps) => {
  return (
  <ul id={navListId} className={`nav${parent?.text === activeParent?.text ? ' nav-active-list' : ''}`}>
    {activeParent && (
        <li className="nav-item">
          <Button className="nav-link--back" variant="subtle" onClick={() => setActiveParent(parent?.parent || null)}>
            <IconArrowLeft className="ads-icon-lg u-icon-left" />
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
        return <NavParent key={`secondaryNavItem${i}`} navItem={navItem} activeParent={activeParent} setActiveParent={setActiveParent} />;
      }
    })}
    </ul>
  );
}

// ----------------- Nav Parent -----------------

interface NavParentProps {
  navItem: NavNode;
  activeParent: NavNode | null;
  setActiveParent: (node: NavNode | null) => any;
}

let navParentId = 0;

const NavParent = ({ navItem, activeParent, setActiveParent }: NavParentProps) => {

  const [navListId, setNavListId] = useState('');

  useEffect(() => {
    const idNum = ++navParentId;
    setNavListId('navItemList' + idNum);
  }, []);

  return (
    <li className="nav-item--parent">
      <Button
        variant="subtle"
        className="nav-item--parent-trigger nav-link"
        aria-expanded={navItem === activeParent}
        aria-controls={navListId}
        onClick={() => setActiveParent(navItem)}
      >
        {navItem.text}
        <IconArrowRight className="ads-icon-2x" />
      </Button>
      <NavList navListId={navListId} navItems={navItem.children!} parent={navItem} activeParent={activeParent} setActiveParent={setActiveParent} />
    </li>
  );
}

export default NavSecondary;
