/* TODO
  - Figure out what needs to be a prop
  - Fix borders
  - Keyboard nav for tabbing backwards from menu to nav bar
*/

import { FocusEvent as ReactFocusEvent, useEffect, useRef, useState } from 'react';
import SkipLink from '../../SkipLink';
import logo from "../../../../assets/images/logo-anatomy.svg";
import { RequireOnlyOne } from '../../../types';
import Button from '../../Button';
import './NavPrimary.scss';
import NavPrimaryMenu from './NavPrimaryMenu';
import NavUtility from './NavUtility';
import { NavLink } from 'react-router-dom';
import IconClose from '../../icon/icons/IconClose';

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
}

export type NavItemPrimary = RequireOnlyOne<NavItemPrimaryBase, 'slug' | 'href' | 'children'>;

export type NavItemUtility = RequireOnlyOne<NavItem, 'slug' | 'href'>;

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
  navItems: NavItemPrimary[];
  activeSlug?: string;
  utilityItems?: NavItemUtility[];
  hasSearch?: boolean;
}

const NavPrimary = ({ utilityItems, navItems, hasSearch = true }: Props): JSX.Element => {

  const [navTree, setNavTree] = useState<NavNode[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [history, setHistory] = useState<HistoryNode[]>([]);
  const [activeNode, setActiveNode] = useState<NavNode | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const updateMenu = (navItem: NavNode): void => {
    if (history.length && history[0].node === navItem) {
      popHistory();
      setIsMenuOpen(false);
    } else {
      pushHistory(navItem, 0);
      setIsMenuOpen(true);
      setIsSearchOpen(false);
    }
  }

  const getActiveRoot = (): NavNode | null => {
    let node = activeNode;
    while (node?.parent) {
      node = node.parent;
    }
    return node;
  }

  useEffect(() => {
    const tree = [...navItems] as NavNode[];

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
    const onFocusWithinOut = (e: FocusEvent | PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
        setHistory([]);
      }
    }
    window.addEventListener('focusin', onFocusWithinOut);
    window.addEventListener('pointerup', onFocusWithinOut);
    return () => {
      window.removeEventListener('focusin', onFocusWithinOut);
      window.removeEventListener('pointerup', onFocusWithinOut);
    }
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen && isSearchOpen) {
      setIsSearchOpen(false);
    }
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleSearch = () => {
    if (!isSearchOpen && isMenuOpen) {
      setIsMenuOpen(false);
    }
    setIsSearchOpen(!isSearchOpen);
  }

  const manageFocus = (e: ReactFocusEvent) => {
    if (e.target.getAttribute('aria-expanded') === 'true') {
      console.log(menuRef.current);
      menuRef.current?.focus();
    }
  }

  return <>
    <SkipLink destinationId="mainContent" destination="main content"/>
    <header className="nav-header" ref={navRef}>
      {utilityItems && <NavUtility utilityItems={utilityItems} />}
      <nav className="nav-primary" aria-label="primary">
        <div className="nav-bar">
          <ul className="nav">
            <li className="nav-item nav-item-logo">
              <a href="/" className="nav-link-logo" aria-label="Anatomy home page">
                <img src={logo} alt="Anatomy logo" />
              </a>
            </li>
            {navTree.map((navItem, i) => (
              <li key={navItem.text + i} className="nav-item nav-item-root">
                {navItem.children &&
                  <Button
                    id={navItem.id}
                    type="button"
                    variant="subtle"
                    className={"nav-link" + (navItem === getActiveRoot() ? ' active' : '')}
                    aria-expanded={history[0] && navItem === history[0].node}
                    onClick={() => updateMenu(navItem)}
                    onBlur={manageFocus}>
                    {navItem.text}
                  </Button>
                }
                {navItem.slug &&
                  <NavLink to={navItem.slug} className="nav-link">{navItem.text}</NavLink>
                }
                {navItem.href &&
                  <a href={navItem.href} className="nav-link">{navItem.text}</a>
                }
              </li>
            ))}
            {hasSearch &&
              <li className="nav-item nav-item-search">
                <Button
                  variant="subtle"
                  className="nav-link"
                  aria-expanded={isSearchOpen}
                  onClick={toggleSearch}>
                  <span className="nav-link-search-text">
                    Search {activeNode?.text}
                  </span>
                </Button>
              </li>
            }
            <li className="nav-item nav-item-toggle">
              <Button
                variant="subtle"
                className="nav-link"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}>
                Menu
              </Button>
            </li>
          </ul>
        </div>
        {isSearchOpen &&
          <div className="search-panel">
            <form className="search" role="search" aria-label="site search">
              <div className="search-control">
                <input
                  type="search"
                  className="ads-input-text-input search-input"
                  placeholder="Search"
                  aria-label="search"
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)} />
                {searchValue &&
                  <button
                    className="search-clear"
                    aria-label="clear search text"
                    onClick={() => setSearchValue('')}>
                    <IconClose className="ads-icon-lg" />
                  </button>
                }
              </div>
              <Button variant="assertive">Search</Button>
            </form>
          </div>
        }
        {navTree.length > 0 &&
          <NavPrimaryMenu
            ref={menuRef}
            navItems={navTree}
            setActiveNode={setActiveNode}
            isMenuOpen={isMenuOpen}
            history={history}
            pushHistory={pushHistory}
            popHistory={popHistory} />
        }
      </nav>
    </header>
  </>;
}

export default NavPrimary;