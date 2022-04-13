import { RequireOnlyOne } from '../../../types';
import NavWizardList from './NavWizardList';
import './NavWizard.scss'
import { useEffect, useState } from 'react';
import Button from '../../Button';

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
}

interface Props {
  navItems: NavItemWizard[];
  defaultTitle?: string;
  defaultDescription?: string;
}

const NavWizard = (props: Props) => {

  const [navTree, setNavTree] = useState<NavNode[]>([]);
  const [history, setHistory] = useState<HistoryNode[]>([]);

  const [preTitle, setPreTitle] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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

  useEffect(() => {
    if (history.length > 0) {
      setPreTitle(history[history.length - 1].node.text);
      setTitle(history[history.length - 1].node.title || '');
      setDescription(history[history.length - 1].node.description || '');
    } else {
      setPreTitle('');
      setTitle(props.defaultTitle || '');
      setDescription(props.defaultDescription || '');
    }
  }, [history, props.defaultTitle, props.defaultDescription]);

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
    <nav className="ads-nav-wizard">
      {history.length > 0 && <Button variant="subtle" type="button" onClick={popHistory}>Back</Button>}
      {preTitle && <p>{preTitle}</p>}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {navTree.length > 0 &&
        <NavWizardList navItems={navTree} history={history} pushHistory={pushHistory} popHistory={popHistory} depth={0} />
      }
    </nav>
  );
}

export default NavWizard;