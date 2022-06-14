/* TODO
  - Keyboard nav for tabbing backwards from menu to nav bar
*/

import { useEffect, useRef, useState } from 'react';
import { RequireOnlyOne } from '../../../types';
import Button from '../../Button';
import './NavPrimary.scss';
import NavPrimaryMenu from './NavPrimaryMenu';
import NavUtility from './NavUtility';
import { NavLink, NavLinkProps } from 'react-router-dom';
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
  isActive?: NavLinkProps['isActive'];
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
    ariaLabel: string;
  };
  texts?: {
    menuToggleAriaLabel?: string;
    menuToggleText?: string;
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
}

let navPrimaryMenuIndex = 0;

const NavPrimary = ({ logo, texts, utilityItems, navItems, hasSearch = true }: Props): JSX.Element => {

  const [navTree, setNavTree] = useState<NavNode[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRootOpen, setIsRootOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [history, setHistory] = useState<HistoryNode[]>([]);
  const [activeNode, setActiveNode] = useState<NavNode | null>(null);
  const [menuId, setMenuId] = useState('');

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
      setIsRootOpen(false);
    } else {
      pushHistory(navItem, 0);
      setIsMenuOpen(true);
      setIsRootOpen(true);
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

    // Add 'parent' property to each nav item that points to the items parent
    const populateParents = (nodes: NavNode[], parent: NavNode | null = null, index = 0) => {
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

  }, [navItems]);

  useEffect(() => {
    // Close menu on focus out or click out
    const onFocusWithinOut = (e: FocusEvent | PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
        setHistory([]);
      }
    }

    // Close menu when viewport goes from small to large before making a root item selection
    const onResize = (e: UIEvent) => {
      const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      if (window.innerWidth >= fontSize * 62 && history.length === 0) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener('focusin', onFocusWithinOut);
    window.addEventListener('pointerup', onFocusWithinOut);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('focusin', onFocusWithinOut);
      window.removeEventListener('pointerup', onFocusWithinOut);
      window.removeEventListener('resize', onResize);
    }
  }, [history]);

  const toggleMenu = () => {
    if (!isMenuOpen && isSearchOpen) {
      setIsSearchOpen(false);
    }
    if (isMenuOpen) {
      setHistory([]);
    }
    setIsRootOpen(false);
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
    <header className="ads-nav-header" ref={navRef}>
      {utilityItems && <NavUtility utilityItems={utilityItems} ariaLabel={texts?.utilityNavAriaLabel} />}
      <nav className="ads-nav-primary" aria-label={texts?.primaryNavAriaLabel || 'primary'}>
        <div className="ads-nav-bar">
          {(logo.to || logo.href) ?
            <Link to={logo.to} href={logo.href} isNavLink={true} className="ads-nav-link-logo" aria-label={logo.ariaLabel}>
              <img src={logo.src} alt={logo.alt} />
            </Link>
            :
            <img className="ads-nav-link-logo" src={logo.src} alt={logo.alt} />
          }
          <ul className="ads-nav">
            {navTree.map((navItem, i) => (
              <li key={navItem.text + i} className="ads-nav-item ads-nav-item-root">
                {navItem.children &&
                  <Button
                    id={navItem.id}
                    type="button"
                    variant="subtle"
                    className={"ads-nav-link" + (navItem === getActiveRoot() ? ' active' : '')}
                    aria-haspopup="true"
                    aria-expanded={history[0] && navItem === history[0].node}
                    aria-controls={menuId}
                    aria-current={navItem === getActiveRoot() ? 'location' : 'false'}
                    onClick={() => updateMenu(navItem)}>
                    {navItem.text}
                  </Button>
                }
                {(navItem.slug || navItem.href) &&
                  <NavLink exact={!!navItem.isExactMatch} to={(navItem.slug ? navItem.slug : navItem.href) || ''} className="ads-nav-link" isActive={navItem.isActive}>{navItem.text}</NavLink>
                }
                {(navTree.length > 0 && history.length > 0 && history[0].node.text === navItem.text && isRootOpen) &&
                  <NavPrimaryMenu
                    ref={menuRef}
                    navItems={navTree}
                    utilityItems={utilityItems}
                    setActiveNode={setActiveNode}
                    menuId={menuId}
                    isMenuOpen={isMenuOpen}
                    history={history}
                    pushHistory={pushHistory}
                    popHistory={popHistory} />
                }
              </li>
            ))}
            {hasSearch &&
              <li className="ads-nav-item ads-nav-item-search">
                <Button
                  variant="subtle"
                  className="ads-nav-link"
                  aria-label={texts?.searchToggleAriaLabel || 'Toggle search'}
                  aria-expanded={isSearchOpen}
                  onClick={toggleSearch}>
                  <span className="ads-nav-link-search-text">
                    {texts?.searchToggleText || 'Search'}
                  </span>
                </Button>
              </li>
            }
            <li className="ads-nav-item ads-nav-item-toggle">
              <Button
                variant="subtle"
                className="ads-nav-link"
                aria-label={texts?.menuToggleAriaLabel || 'Toggle menu'}
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}>
                {texts?.menuToggleText || 'Menu'}
              </Button>
            </li>
          </ul>
        </div>
        <div className={'ads-search-panel' + (isSearchOpen ? ' open' : '')}>
          <Search label="Search" buttonText={texts?.searchButtonText} buttonAriaLabel={texts?.searchButtonAriaLabel} />
        </div>
        {(navTree.length > 0 && !isRootOpen) &&
          <NavPrimaryMenu
            ref={menuRef}
            navItems={navTree}
            utilityItems={utilityItems}
            setActiveNode={setActiveNode}
            menuId={menuId}
            isMenuOpen={isMenuOpen}
            history={history}
            pushHistory={pushHistory}
            popHistory={popHistory} />
        }
      </nav>
    </header>
  );
}

export default NavPrimary;