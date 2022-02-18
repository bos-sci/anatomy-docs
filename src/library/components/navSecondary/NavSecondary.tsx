import { useEffect, useState } from 'react'
import NavSecondaryList from './NavSecondaryList';
import IconChevronDown from '../icon/icons/IconChevronDown';
import IconChevronUp from '../icon/icons/IconChevronUp';
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
  const [isOpen, setIsOpen] = useState(false);

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
      <button className="nav-secondary-menu-trigger" aria-expanded={isOpen} aria-controls="navSecondaryMenu" onClick={() => setIsOpen(!isOpen)}>
        Menu
        { isOpen && <IconChevronUp className='ads-icon-lg' /> }
        { !isOpen && <IconChevronDown className='ads-icon-lg' /> }
      </button>
      <div id="navSecondaryMenu" className={`nav-secondary-menu${isOpen ? ' open' : ''}`}>
        <NavSecondaryList navItems={navTree} parent={null} activeParent={activeParent} setActiveParent={setActiveParent} />
      </div>
    </nav>
  );
}

export default NavSecondary;
