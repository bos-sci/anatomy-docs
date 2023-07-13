import { ChangeEvent, FormEvent, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Location, NavLink, useLocation } from 'react-router-dom';
import { RequireOnlyOne } from 'library/types';
import Button from 'library/components/Button';
import Link from 'library/components/Link';
import { SearchResult } from 'library/components/Search';
import NavPrimarySearch from './NavPrimarySearch';
import NavPrimaryMenu from './NavPrimaryMenu';
import NavUtility from './NavUtility';

interface NavItem {
  text: string;
  to?: string;
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

export type NavItemPrimary = RequireOnlyOne<NavItemPrimaryBase, 'to' | 'href' | 'children'>;

export type NavItemUtility = RequireOnlyOne<NavItemUtilityBase, 'to' | 'href' | 'children'>;

interface NavTreeNode extends NavItemPrimaryBase {
  parent: NavNode | null;
  children?: NavNode[];
  id: string;
}

export type NavNode = RequireOnlyOne<NavTreeNode, 'to' | 'href' | 'children'>;

export interface HistoryNode {
  node: NavNode;
  depth: number;
}

export interface Texts {
  menuToggleAriaLabel?: string;
  menuToggleTextOpen?: string;
  menuToggleTextClose?: string;
  menuBackButton?: string;
  searchLabel?: string;
  searchAriaLabel?: string;
  searchToggleAriaLabel?: string;
  searchToggleText?: string;
  searchButtonText?: string;
  searchButtonAriaLabel?: string;
  searchInputAriaLabel?: string;
  searchClearTextAriaLabel?: string;
  searchNoResults?: string;
  utilityNavAriaLabel?: string;
  primaryNavAriaLabel?: string;
}

interface Props {
  logo: {
    src: string;
    alt: string;
    href?: string;
    to?: string;
  };
  texts?: Texts;
  navItems: NavItemPrimary[];
  utilityItems?: NavItemUtility[];
  hasSearch?: boolean;
  isConstrained?: boolean;
  searchResults?: SearchResult[];
  onSearch?: (query: string, e: FormEvent<HTMLFormElement>) => void;
  onSearchChange?: (query: string, e: ChangeEvent<HTMLInputElement>) => void;
}

let navPrimaryMenuIndex = 0;

const NavPrimary = ({
  logo,
  texts,
  utilityItems,
  navItems,
  hasSearch = true,
  isConstrained = false,
  searchResults,
  onSearchChange,
  onSearch
}: Props): JSX.Element => {
  const location = useLocation();

  const [navTree, setNavTree] = useState<NavNode[]>([]);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [history, setHistory] = useState<HistoryNode[]>([]);
  const [activeNode, setActiveNode] = useState<NavNode | null>(null);
  const [menuId, setMenuId] = useState('');
  const [isViewportSmall, setIsViewportSmall] = useState(false);
  const [isIntermediateNav, setIsIntermediateNav] = useState(false);
  const [isNavTouched, setIsNavTouched] = useState(false);
  const [rootButton, setRootButton] = useState<HTMLButtonElement>();
  const [toggleText, setToggleText] = useState('');

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
  };

  const popHistory = () => {
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
  };

  // Open menu to right place or close menu on click of root item
  const updateMenu = (e: MouseEvent<HTMLButtonElement>, navItem: NavNode): void => {
    setRootButton(e.target as HTMLButtonElement);
    if (history.length && history[0].node === navItem) {
      setHistory([]);
      setIsMenuExpanded(false);
    } else {
      pushHistory(navItem, 0);
      setIsMenuExpanded(true);
      setIsSearchExpanded(false);
    }
  };

  // Travels up the tree from the active node to get the root item
  const getActiveRoot = (): NavNode | null => {
    let node = activeNode;
    while (node?.parent) {
      node = node.parent;
    }
    return node;
  };

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
    };
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
        setIsMenuExpanded(false);
      }
    } else if (!isViewportSmall) {
      setIsViewportSmall(true);
    }
  }, [history.length, isViewportSmall]);

  useEffect(() => {
    if (isMenuExpanded) {
      setIsNavTouched(true);
    }
  }, [isMenuExpanded]);

  useEffect(() => {
    if (location) {
      setIsSearchExpanded(false);
      setIsMenuExpanded(false);
      setHistory([]);
    }
  }, [location]);

  useEffect(() => {
    // Close menu on focus out or click out
    const onFocusWithinOut = (e: FocusEvent | PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setIsSearchExpanded(false);
        setIsMenuExpanded(false);
        setHistory([]);
      }
    };

    onResize();

    window.addEventListener('focusin', onFocusWithinOut);
    window.addEventListener('pointerup', onFocusWithinOut);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('focusin', onFocusWithinOut);
      window.removeEventListener('pointerup', onFocusWithinOut);
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case 'Escape':
        if (isMenuExpanded || isSearchExpanded) {
          rootButton?.focus();
        }
        e.preventDefault();
        setIsMenuExpanded(false);
        setHistory([]);
        setIsSearchExpanded(false);
        break;

      default:
        break;
    }
  };

  const toggleMenu = (e: MouseEvent<HTMLButtonElement>) => {
    setRootButton(e.target as HTMLButtonElement);
    if (!isMenuExpanded && isSearchExpanded) {
      setIsSearchExpanded(false);
    }
    if (isMenuExpanded) {
      setHistory([]);
    }
    setIsMenuExpanded(!isMenuExpanded);
  };

  const toggleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    setRootButton(e.target as HTMLButtonElement);
    if (!isSearchExpanded && isMenuExpanded) {
      setIsMenuExpanded(false);
      setHistory([]);
    }
    setIsSearchExpanded(!isSearchExpanded);
  };

  const isCurrent = (isActive: boolean, navItem: NavItemPrimary): boolean => {
    if (navItem.isActive) {
      return navItem.isActive(location);
    } else {
      return isActive;
    }
  };

  useEffect(() => {
    if (isMenuExpanded) {
      setToggleText(texts?.menuToggleTextClose || 'Close');
    } else {
      setToggleText(texts?.menuToggleTextOpen || 'Menu');
    }
  }, [isMenuExpanded, texts?.menuToggleTextClose, texts?.menuToggleTextOpen]);

  return (
    <header ref={navRef} className={'bsds-nav-header' + (isConstrained ? ' is-constrained' : '')}>
      {!!utilityItems && <NavUtility utilityItems={utilityItems} ariaLabel={texts?.utilityNavAriaLabel} />}
      <nav className="bsds-nav-primary" aria-label={texts?.primaryNavAriaLabel || 'primary'}>
        <div className="bsds-nav-bar">
          {logo.to || logo.href ? (
            <Link to={logo.to} href={logo.href} className="bsds-nav-link-logo" isNavLink>
              <img src={logo.src} alt={logo.alt} />
            </Link>
          ) : (
            <img className="bsds-nav-link-logo" src={logo.src} alt={logo.alt} />
          )}
          <ul className="bsds-nav" role="menubar" onKeyUp={handleKeyUp}>
            {navTree.map((navItem, i) => (
              <li
                key={navItem.text + (navItem?.to || navItem?.href)}
                role="none"
                className="bsds-nav-item bsds-nav-item-root"
              >
                {!!navItem.children && (
                  // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
                  <Button
                    role="menuitem"
                    id={navItem.id}
                    type="button"
                    variant="subtle"
                    className={'bsds-nav-link' + (navItem === getActiveRoot() ? ' is-current' : '')}
                    aria-haspopup="true"
                    aria-expanded={navItem === history[0]?.node}
                    aria-controls={menuId}
                    onClick={(e) => updateMenu(e, navItem)}
                  >
                    {navItem.text}
                  </Button>
                )}
                {!!(navItem.to || navItem.href) && (
                  // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
                  <NavLink
                    end={!!navItem.isExactMatch}
                    to={(navItem.to ? navItem.to : navItem.href) || ''}
                    className={({ isActive }) => `bsds-nav-link${isCurrent(isActive, navItem) ? ' is-current' : ''}`}
                    aria-current={(navItem.isActive?.(location) && 'page') ?? undefined}
                    role="menuitem"
                  >
                    {navItem.text}
                  </NavLink>
                )}
                {navTree.length > 0 &&
                  history.length > 0 &&
                  history[0].node.text === navItem.text &&
                  !isViewportSmall && (
                    <NavPrimaryMenu
                      ref={menuRef}
                      navItems={navTree}
                      utilityItems={utilityItems}
                      activeNode={activeNode}
                      setActiveNode={setActiveNode}
                      menuId={menuId}
                      isMenuExpanded={isMenuExpanded}
                      isIntermediateNav={isIntermediateNav}
                      history={history}
                      pushHistory={pushHistory}
                      popHistory={popHistory}
                      texts={texts}
                    />
                  )}
              </li>
            ))}
            {!!hasSearch && (
              <li role="none" className="bsds-nav-item bsds-nav-item-search">
                {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
                <Button
                  role="menuitem"
                  variant="subtle"
                  className="bsds-nav-link"
                  aria-label={texts?.searchToggleAriaLabel || 'Toggle search'}
                  aria-expanded={isSearchExpanded}
                  onClick={toggleSearch}
                >
                  <span className="bsds-nav-link-search-text">{texts?.searchToggleText || 'Search'}</span>
                </Button>
                <NavPrimarySearch
                  texts={texts}
                  isExpanded={isSearchExpanded}
                  searchResults={searchResults}
                  onSearchChange={onSearchChange}
                  onSearch={onSearch}
                />
              </li>
            )}
            <li role="none" className="bsds-nav-item bsds-nav-item-toggle">
              {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
              <Button
                role="menuitem"
                variant="subtle"
                className="bsds-nav-link"
                aria-label={texts?.menuToggleAriaLabel || 'Toggle menu'}
                aria-expanded={isMenuExpanded}
                onClick={toggleMenu}
              >
                {toggleText}
              </Button>
            </li>
          </ul>
        </div>
        {!!(navTree.length > 0 && (isViewportSmall || !isNavTouched)) && (
          <NavPrimaryMenu
            ref={menuRef}
            navItems={navTree}
            utilityItems={utilityItems}
            activeNode={activeNode}
            setActiveNode={setActiveNode}
            menuId={menuId}
            isMenuExpanded={isMenuExpanded}
            isIntermediateNav={isIntermediateNav}
            history={history}
            pushHistory={pushHistory}
            popHistory={popHistory}
            texts={texts}
          />
        )}
      </nav>
    </header>
  );
};

export default NavPrimary;
