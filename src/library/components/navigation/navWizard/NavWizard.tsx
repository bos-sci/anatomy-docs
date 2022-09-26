import { RequireOnlyOne } from '../../../types';
import NavWizardList from './NavWizardList';
import './NavWizard.scss'
import { RefObject, useEffect, useState, useRef } from 'react';
import Button from '../../Button';
import IconChevronLeft from '../../icon/icons/IconChevronLeft';

interface NavItem {
  text: string;
  slug?: string;
  href?: string;
}

interface NavItemWizardBase extends NavItem {
  children?: NavItemWizard[];
  description?: string;
  title?: string;
  overflowTo?: string;
  overflowHref?: string;
  overflowLinkText?: string;
}

export type NavItemWizard = RequireOnlyOne<NavItemWizardBase, 'slug' | 'href' | 'children'>;

export type NavItemUtility = RequireOnlyOne<NavItem, 'slug' | 'href'>;

interface NavTreeNode extends NavItemWizardBase {
  parent: NavNode | null;
  children?: NavNode[];
  id: string;
}

export type NavNode = RequireOnlyOne<NavTreeNode, 'slug' | 'href' | 'children'>;

export interface HistoryNode {
  node: NavNode;
  depth: number;
  ref: RefObject<HTMLButtonElement>;
}

interface Props {
  navItems: NavItemWizard[];
  texts: {
    firstTitle?: string;
    firstDescription?: string;
    wizardNavAriaLabel: string;
    backButtonText?: string;
    backButtonAriaLabel?: string;
  }
}

const NavWizard = (props: Props) => {

  const [navTree, setNavTree] = useState<NavNode[]>([]);
  const [history, setHistory] = useState<HistoryNode[]>([]);

  const [breadcrumb, setBreadcrumb] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const backBtnRef = useRef<HTMLButtonElement>(null);

  const pushHistory = (navItem: NavNode, depth: number, ref: RefObject<HTMLButtonElement>) => {
    const newHistory = [...history];
    if (newHistory.length > 0 && depth <= newHistory[newHistory.length - 1].depth) {
      newHistory.splice(depth);
    }
    newHistory.push({
      node: navItem,
      depth,
      ref
    });
    setHistory(newHistory);
  }

  const popHistory = () => {
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
  }

  const focusBackBtn = () => {
    setTimeout(() => backBtnRef.current?.focus(), 0);
  }

  const backStep = () => {
    popHistory();
    setTimeout(() => history[history.length - 1].ref.current?.focus(), 0);
  }

  useEffect(() => {
    if (history.length > 0) {
      setBreadcrumb(history[history.length - 1].node.text);
      setTitle(history[history.length - 1].node.title || '');
      setDescription(history[history.length - 1].node.description || '');
    } else {
      setBreadcrumb('');
      setTitle(props.texts.firstTitle || '');
      setDescription(props.texts.firstDescription || '');
    }
  }, [history, props.texts.firstTitle, props.texts.firstDescription]);

  useEffect(() => {
    const tree = [...props.navItems] as NavNode[];

    const populateParents = (nodes: NavNode[], parent: NavNode | null = null, index = 0) => {
      nodes.forEach((node, i) => {
        node.parent = parent;
        node.id = `navWizardNode${index}-${i}`;
        if (node.children) {
          populateParents(node.children as NavNode[], node, ++index);
        }
      });
    }
    populateParents(tree);
    setNavTree(tree);

  }, [props.navItems]);

  return (
    <nav className="bsds-nav-wizard" aria-label={props.texts.wizardNavAriaLabel}>
      <div className="bsds-nav-wizard-header">
        {history.length > 0 &&
          <Button
            ref={backBtnRef}
            type="button"
            className="bsds-button-nav-back"
            aria-label={props.texts.backButtonAriaLabel ? props.texts.backButtonAriaLabel : 'Back to previous step'}
            onClick={backStep}>
            {props.texts.backButtonText ? props.texts.backButtonText : 'Back'}
          </Button>}
        {breadcrumb && <p className="bsds-nav-breadcrumb" aria-current="step">{breadcrumb}</p>}
        {title && <h2 className="bsds-nav-title">{title}</h2>}
        {description && <p className="bsds-nav-description">{description}</p>}
      </div>
      {navTree.length > 0 &&
        <div className="bsds-nav-wizard-menu">
          <NavWizardList navItems={navTree} history={history} pushHistory={pushHistory} popHistory={popHistory} depth={0} focusBackBtn={focusBackBtn} />
        </div>
      }
    </nav>
  );
}

export default NavWizard;