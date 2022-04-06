import { useEffect, useRef, useState } from 'react'
import { RequireOnlyOne } from '../../../types';
import NavSecondaryList from './NavSecondaryList';
import IconChevronDown from '../../icon/icons/IconChevronDown';
import IconChevronUp from '../../icon/icons/IconChevronUp';
import "./NavSecondary.scss"

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
  menuTriggerText: string;
  navItems: NavItemSecondary[];
  activeSlug?: string;
}

const NavSecondary = ({ menuTriggerText, navItems, activeSlug }: Props): JSX.Element => {

  const [navTree, setNavTree] = useState<NavNode[]>([]);
  const [activeParent, setActiveParent] = useState<NavNode | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const nav = useRef<HTMLElement>(null);

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
    if (activeSlug) {
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
      const currentNode = findNodeBySlug(navTree, activeSlug);
      if (currentNode) {
        setActiveParent(currentNode.parent);
      }
    }
  }, [activeSlug, navTree]);

  useEffect(() => {
    const onFocusWithinOut = (e: FocusEvent | PointerEvent) => {
      if (!nav.current?.contains(e.target as Node) && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener('focusin', onFocusWithinOut);
    window.addEventListener('pointerup', onFocusWithinOut);
    return () => {
      window.removeEventListener('focusin', onFocusWithinOut);
      window.removeEventListener('pointerup', onFocusWithinOut);
    }
  }, [isOpen]);

  return (
    <nav className="nav-secondary" aria-label="secondary navigation" ref={nav}>
      <button className="nav-secondary-menu-trigger" aria-expanded={isOpen} aria-controls="navSecondaryMenu" onClick={() => setIsOpen(!isOpen)}>
        { menuTriggerText }
        { isOpen && <IconChevronUp className="ads-icon-lg" /> }
        { !isOpen && <IconChevronDown className="ads-icon-lg" /> }
      </button>
      <div id="navSecondaryMenu" className={`nav-secondary-menu${isOpen ? ' open' : ''}`}>
        <NavSecondaryList navItems={navTree} parent={null} activeParent={activeParent} setActiveParent={setActiveParent} />
      </div>
    </nav>
  );
}

export default NavSecondary;
