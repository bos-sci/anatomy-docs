import { useEffect, useRef, useState } from 'react';
import logo from "../../../assets/images/logo-anatomy.svg";
import { RequireOnlyOne } from '../../types';
import Button from '../Button';
import IconMenu from '../icon/icons/IconMenu';
import './NavPrimary.scss';
import NavPrimaryMenu from './NavPrimaryMenu';
import NavUtility from './NavUtility';
import { NavLink } from 'react-router-dom';
import IconChevronDown from '../icon/icons/IconChevronDown';
import IconChevronUp from '../icon/icons/IconChevronUp';

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
}

export type NavNode = RequireOnlyOne<NavTreeNode, 'slug' | 'href' | 'children'>;

interface Props {
  navItems: NavItemPrimary[];
  activeSlug?: string;
  utilityItems?: NavItemUtility[];
}

const NavPrimary = ({ utilityItems, navItems }: Props): JSX.Element => {

  const [navTree, setNavTree] = useState<NavNode[]>([]);
  const [currentRootItem, setCurrentRootItem] = useState<NavNode | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav = useRef<HTMLElement>(null);

  const updateMenu = (navItem: NavNode | null): void => {
    if (currentRootItem !== navItem) {
      setCurrentRootItem(navItem);
      setIsMenuOpen(true);
    } else {
      setCurrentRootItem(null);
      setIsMenuOpen(false);
    }
  }

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
    const onFocusWithinOut = (e: FocusEvent | PointerEvent) => {
      if (!nav.current?.contains(e.target as Node) && currentRootItem) {
        setIsMenuOpen(false);
        setCurrentRootItem(null);
      }
    }
    window.addEventListener('focusin', onFocusWithinOut);
    window.addEventListener('pointerup', onFocusWithinOut);
    return () => {
      window.removeEventListener('focusin', onFocusWithinOut);
      window.removeEventListener('pointerup', onFocusWithinOut);
    }
  }, [currentRootItem]);


  return <>
    <a href="#mainContent" className="skip-link">Skip to main content</a>
    <header className="nav-header" ref={nav}>
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
                    type="button"
                    variant="subtle"
                    className={'nav-link' + (navItem === currentRootItem ? ' active' : '')}
                    onClick={() => updateMenu(navItem)}>
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
            {/* <li className="nav-item nav-primary-search">
              Search will go here
            </li> */}
            <li className="nav-item nav-item-toggle">
              <Button variant="subtle" className={'nav-link' + (isMenuOpen ? ' open' : '')} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                Menu
              </Button>
            </li>
          </ul>
        </div>
        {isMenuOpen &&
          <NavPrimaryMenu
            navItems={navTree}
            currentRootItem={currentRootItem}
            setCurrentRootItem={setCurrentRootItem} />
        }
      </nav>
    </header>
  </>;
}

export default NavPrimary;