import { RefObject, useEffect, useRef, useState } from 'react';
import { RequireOnlyOne } from '../../../types';
import NavSecondaryList from './NavSecondaryList';
import './NavSecondary.scss';
import Button from '../../Button';
import { useLocation } from 'react-router-dom';

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
  activeSlug?: string;
  texts?: {
    menuToggleAriaLabel?: string;
    menuToggleText?: string;
    navAriaLabel?: string;
    backButtonText?: string;
  };
}

let navSecondaryIndex = 0;

const NavSecondary = ({ navItems, activeSlug, texts }: Props): JSX.Element => {
  const [navTree, setNavTree] = useState<NavNode[]>([]);
  const [activeParent, setActiveParent] = useState<NavNode | null>(null);
  const [activeParentRef, setActiveParentRef] = useState<RefObject<HTMLButtonElement> | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [navSecondaryId, setNavSecondaryId] = useState('');

  const nav = useRef<HTMLElement>(null);
  const backBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tree = [...navItems] as NavNode[];

    const populateParents = (nodes: NavNode[], parent: NavNode | null = null) => {
      nodes.forEach((node) => {
        node.parent = parent;
        if (node.children) {
          populateParents(node.children as NavNode[], node);
        }
      });
    };
    populateParents(tree);
    setNavTree(tree);
  }, [navItems]);

  const location = useLocation();

  useEffect(() => {
    const findNodeBySlug = (nodes: NavNode[], slug: string): NavNode | undefined => {
      function findInTree(node: NavNode, slug: string): NavNode | null {
        if (node.slug && slug.includes(node.slug)) {
          return node;
        } else if (node.children) {
          for (let i = 0; i < node.children.length; i++) {
            let found: NavNode | null = findInTree(node.children[i], slug);
            if (found) {
              return found;
            }
          }
          return null;
        } else {
          return null;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const foundNode = findInTree(nodes[i], slug);
        if (foundNode) {
          return foundNode;
        }
      }
    };
    const currentNode = findNodeBySlug(navTree, activeSlug ? activeSlug : location.pathname);
    if (currentNode) {
      setActiveParent(currentNode.parent);
    }
  }, [activeSlug, location, navTree]);

  const goBack = () => {
    setActiveParent(activeParent?.parent || null);
    setTimeout(() => activeParentRef?.current?.focus(), 0);
  };

  const openChild = (navItem: NavNode | null) => {
    setActiveParent(navItem);
    setTimeout(() => backBtnRef.current?.focus(), 0);
  };

  useEffect(() => {
    setNavSecondaryId('navSecondary' + navSecondaryIndex++);
  }, []);

  useEffect(() => {
    const onFocusWithinOut = (e: FocusEvent | PointerEvent) => {
      if (!nav.current?.contains(e.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('focusin', onFocusWithinOut);
    window.addEventListener('pointerup', onFocusWithinOut);
    return () => {
      window.removeEventListener('focusin', onFocusWithinOut);
      window.removeEventListener('pointerup', onFocusWithinOut);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav ref={nav} className="bsds-nav-secondary" aria-label={texts?.navAriaLabel || 'secondary'}>
      <button
        className="bsds-nav-secondary-menu-trigger"
        aria-expanded={isOpen}
        aria-controls={navSecondaryId}
        aria-label={texts?.menuToggleAriaLabel || texts?.menuToggleText || 'Secondary menu'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {texts?.menuToggleText || 'Menu'}
      </button>
      <div id={navSecondaryId} className={`bsds-nav-secondary-menu${isOpen ? ' open' : ''}`}>
        {!!activeParent && (
          <Button ref={backBtnRef} type="button" className="bsds-button-nav-back" onClick={goBack}>
            {texts?.backButtonText || 'Back'}
          </Button>
        )}
        <NavSecondaryList
          navItems={navTree}
          parent={null}
          activeParent={activeParent}
          activeParentRef={activeParentRef}
          setActiveParentRef={setActiveParentRef}
          openChild={openChild}
        />
      </div>
    </nav>
  );
};

export default NavSecondary;
