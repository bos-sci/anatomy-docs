import { useCallback, useEffect, useRef, useState } from 'react';
import { RequireOnlyOne } from '../../../types';
import Button from '../../Button';
import './NavPrimary.scss';
import NavPrimaryMenu from './NavPrimaryMenu';
import NavUtility from './NavUtility';
import { Location, NavLink, useLocation } from 'react-router-dom';
import Link from '../../Link';
import Search from '../../Search';

interface NavItem {
  text: string;
  slug?: string;
  href?: string;
}

interface NavItemPrimaryBase extends NavItem {
  children?: NavItemPrimary[];
  description?: string;
  title?: string;
  altTo?: string;
  altHref?: string;
  altLinkText?: string;
  isExactMatch?: boolean;
  isActive?: (location: Location) => boolean;
}

interface NavItemUtilityBase extends NavItem {
  children?: NavItemUtility[];
}

export type NavItemPrimary = RequireOnlyOne<NavItemPrimaryBase, 'slug' | 'href' | 'children'>;

export type NavItemUtility = RequireOnlyOne<NavItemUtilityBase, 'slug' | 'href' | 'children'>;

interface NavTreeNode extends NavItemPrimaryBase {
  parent: NavNode | null;
  children?: NavNode[];
  id: string;
}

export type NavNode = RequireOnlyOne<NavTreeNode, 'slug' | 'href' | 'children'>;

export interface HistoryNode {
  node: NavNode;
  depth: number;
}

interface Props {
  logo: {
    src: string;
    alt: string;
    href?: string;
    to?: string;
  };
  texts?: {
    menuToggleAriaLabel?: string;
    menuToggleTextOpen?: string;
    menuToggleTextClose?: string;
    searchToggleAriaLabel?: string;
    searchToggleText?: string;
    searchButtonText?: string;
    searchButtonAriaLabel?: string;
    utilityNavAriaLabel?: string;
    primaryNavAriaLabel?: string;
  }
  navItems: NavItemPrimary[];
  utilityItems?: NavItemUtility[];
  hasSearch?: boolean;
  isConstrained?: boolean;
}

let navPrimaryMenuIndex = 0;

const NavPrimary = ({ logo, texts, utilityItems, navItems, hasSearch = true, isConstrained = false }: Props): JSX.Element => {
  const location = useLocation();

  const [navTree, setNavTree] = useState<NavNode[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [history, setHistory] = useState<HistoryNode[]>([]);
  const [activeNode, setActiveNode] = useState<NavNode | null>(null);
  const [menuId, setMenuId] = useState('');
  const [isViewportSmall, setIsViewportSmall] = useState(false);
  const [isIntermediateNav, setIsIntermediateNav] = useState(false);
  const [isNavTouched, setIsNavTouched] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuId('navPrimaryMenu' + navPrimaryMenuIndex++);
  }, []);

  const pushHistory = (navItem: NavNode, depth: number) => {
    const newHistory = [...history];
    if (newHistory.length > 0 && depth <= newHistory[newHistory.length - 1].depth) {
      newHistory.splice(depth);
    }
    newHistory.push({
      node: navItem,
      depth: depth
    });
    setHistory(newHistory);
  }

  const popHistory = () => {
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
  }

  // Open menu to right place or close menu on click of root item
  const updateMenu = (navItem: NavNode): void => {
    if (history.length && history[0].node === navItem) {
      setHistory([]);
      setIsMenuOpen(false);
    } else {
      pushHistory(navItem, 0);
      setIsMenuOpen(true);
      setIsSearchOpen(false);
    }
  }

  // Travels up the tree from the active node to get the root item
  const getActiveRoot = (): NavNode | null => {
    let node = activeNode;
    while (node?.parent) {
      node = node.parent;
    }
    return node;
  }

  useEffect(() => {
    const tree = [...navItems] as NavNode[];

    let treeDepth = 0;

    // Add 'parent' property to each nav item that points to the items parent
    const populateParents = (nodes: NavNode[], parent: NavNode | null = null, index = 0) => {
      if (index > treeDepth) {
        treeDepth = index;
      }
      nodes.forEach((node, i) => {
        node.parent = parent;
        node.id = `navPrimaryNode${index}-${i}`;
        if (node.children) {
          populateParents(node.children as NavNode[], node, ++index);
        }
      });
    }
    populateParents(tree);
    setNavTree(tree);
    setIsIntermediateNav(treeDepth + 1 === 2);

  }, [navItems]);

  // Close menu when viewport goes from small to large before making a root item selection
  const onResize = useCallback(() => {
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (window.innerWidth >= fontSize * 62) {
      if (isViewportSmall) {
        setIsViewportSmall(false);
      }
      if (history.length === 0) {
        setIsMenuOpen(false);
      } else if (isMenuOpen) {
      }
    } else if (!isViewportSmall) {
      setIsViewportSmall(true);
    }
  }, [history.length, isMenuOpen, isViewportSmall]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsNavTouched(true);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    // Close menu on focus out or click out
    const onFocusWithinOut = (e: FocusEvent | PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
        setHistory([]);
      }
    }

    onResize();

    window.addEventListener('focusin', onFocusWithinOut);
    window.addEventListener('pointerup', onFocusWithinOut);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('focusin', onFocusWithinOut);
      window.removeEventListener('pointerup', onFocusWithinOut);
      window.removeEventListener('resize', onResize);
    }
  }, [onResize]);

  const toggleMenu = () => {
    if (!isMenuOpen && isSearchOpen) {
      setIsSearchOpen(false);
    }
    if (isMenuOpen) {
      setHistory([]);
    }
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleSearch = () => {
    if (!isSearchOpen && isMenuOpen) {
      setIsMenuOpen(false);
      setHistory([]);
    }
    setIsSearchOpen(!isSearchOpen);
  }

  return (
    <header className={"bsds-nav-header" + (isConstrained ? ' is-constrained' : '')} ref={navRef}>
      {utilityItems && <NavUtility utilityItems={utilityItems} ariaLabel={texts?.utilityNavAriaLabel} />}
      <nav className="bsds-nav-primary" aria-label={texts?.primaryNavAriaLabel || 'primary'}>
        <div className="bsds-nav-bar">
          {(logo.to || logo.href) ?
            <Link to={logo.to} href={logo.href} isNavLink={true} className="bsds-nav-link-logo">
              <img src={logo.src} alt={logo.alt} />
            </Link>
            :
            <img className="bsds-nav-link-logo" src={logo.src} alt={logo.alt} />
          }
          <ul className="bsds-nav">
            {navTree.map((navItem, i) => (
              <li key={navItem.text + i} className="bsds-nav-item bsds-nav-item-root">
                {navItem.children &&
                  <Button
                    id={navItem.id}
                    type="button"
                    variant="subtle"
                    className={"bsds-nav-link" + (navItem === getActiveRoot() ? ' current' : '')}
                    aria-haspopup="true"
                    aria-expanded={history[0] && navItem === history[0].node}
                    aria-controls={menuId}
                    onClick={() => updateMenu(navItem)}>
                    {navItem.text}
                  </Button>
                }
                {(navItem.slug || navItem.href) &&
                  <NavLink
                    end={!!navItem.isExactMatch}
                    to={(navItem.slug ? navItem.slug : navItem.href) || ''}
                    className={`bsds-nav-link${navItem.isActive && navItem.isActive(location) ? ' current' : ''}`}
                    aria-current={navItem.isActive && navItem.isActive(location) ? 'page' : undefined}>
                      {navItem.text}
                  </NavLink>
                }
                {(navTree.length > 0 && history.length > 0 && history[0].node.text === navItem.text && !isViewportSmall) &&
                  <NavPrimaryMenu
                    ref={menuRef}
                    navItems={navTree}
                    utilityItems={utilityItems}
                    activeNode={activeNode}
                    setActiveNode={setActiveNode}
                    menuId={menuId}
                    isMenuOpen={isMenuOpen}
                    isIntermediateNav={isIntermediateNav}
                    history={history}
                    pushHistory={pushHistory}
                    popHistory={popHistory} />
                }
              </li>
            ))}
            {hasSearch &&
              <li className="bsds-nav-item bsds-nav-item-search">
                <Button
                  variant="subtle"
                  className="bsds-nav-link"
                  aria-label={texts?.searchToggleAriaLabel || 'Toggle search'}
                  aria-expanded={isSearchOpen}
                  onClick={toggleSearch}>
                  <span className="bsds-nav-link-search-text">
                    {texts?.searchToggleText || 'Search'}
                  </span>
                </Button>
              </li>
            }
            <li className="bsds-nav-item bsds-nav-item-toggle">
              <Button
                variant="subtle"
                className="bsds-nav-link"
                aria-label={texts?.menuToggleAriaLabel || 'Toggle menu'}
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}>
                {isMenuOpen ? texts?.menuToggleTextClose || 'Close' : texts?.menuToggleTextOpen || 'Menu'}
              </Button>
            </li>
          </ul>
        </div>
        <div className={'bsds-search-panel' + (isSearchOpen ? ' open' : '')}>
          <Search
            label="Search"
            texts={{
              buttonText: texts?.searchButtonText,
              buttonAriaLabel: texts?.searchButtonAriaLabel,
              searchAriaLabel: "Primary navigation search"
            }}
          />
        </div>
        {((navTree.length > 0 && isViewportSmall) || (navTree.length > 0 && !isNavTouched)) &&
          <NavPrimaryMenu
            ref={menuRef}
            navItems={navTree}
            utilityItems={utilityItems}
            activeNode={activeNode}
            setActiveNode={setActiveNode}
            menuId={menuId}
            isMenuOpen={isMenuOpen}
            isIntermediateNav={isIntermediateNav}
            history={history}
            pushHistory={pushHistory}
            popHistory={popHistory} />
        }
      </nav>
    </header>
  );
}

export default NavPrimary;