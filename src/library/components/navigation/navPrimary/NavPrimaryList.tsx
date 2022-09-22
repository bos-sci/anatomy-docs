import Link from '../../Link';
import { NavNode } from './NavPrimary';
import NavPrimaryListParent from './NavPrimaryListParent';
import { HistoryNode } from './NavPrimary';
import NavPrimaryLeaf from './NavPrimaryLeaf';

interface Props {
  navItems: NavNode[];
  activeNode: NavNode | null;
  setActiveNode: (node: NavNode) => void;
  depth: number;
  activeDepth: number;
  setActiveDepth: (activeDepth: number) => void;
  history: HistoryNode[];
  pushHistory: (navItem: NavNode, depth: number) => void;
  popHistory: () => void;
}

const NavPrimaryList = (props: Props) => {
  const parent = props.navItems[0].parent;
  return (
    <div
      className={
        'bsds-nav-menu-panel'
        + (parent?.altLinkText && props.depth === 1 ? ' has-header' : '')
        + ((props.history.length === 0 && props.depth === 0) || ((parent && props.history[props.history.length - 1]?.node === parent)) ? ' bsds-nav-active-list' : '')
        + (parent && Array.from(props.history, h => h.node).includes(parent) ? ' bsds-nav-list-history' : '')
      }
    >
      {parent?.altLinkText && props.depth === 1 &&
        <div className="bsds-nav-menu-panel-header">
          <p className="bsds-nav-menu-panel-title">{ parent.text }</p>
          <p className="bsds-body-subtle">{ parent.description }</p>
          <Link to={parent.altTo} href={parent.altHref} className="bsds-body-subtle bsds-nav-menu-panel-header-link">
            {parent.altLinkText}
          </Link>
        </div>
      }
      <ul className="bsds-nav" aria-describedby={parent?.id}>
        {props.navItems.map((navItem, i) => {
          if (navItem.children) {
            // Parent Button
            return <NavPrimaryListParent
              key={navItem.text + i}
              navItem={navItem}
              activeNode={props.activeNode}
              setActiveNode={props.setActiveNode}
              depth={props.depth}
              activeDepth={props.activeDepth}
              setActiveDepth={props.setActiveDepth}
              history={props.history}
              pushHistory={props.pushHistory}
              popHistory={props.popHistory} />;
          } else {
            return (
              // Leaf Node
              <NavPrimaryLeaf key={navItem.text + i} navItem={navItem} setActiveNode={props.setActiveNode} />
            );
          }
        })}

        {/* Bottom Link */}
        {parent?.altLinkText && props.depth !== 1  &&
          <li key={parent.altLinkText + props.depth} className="bsds-nav-item">
            <Link href={parent.altHref} to={parent.altTo} className="bsds-nav-link-see-all">{parent.altLinkText}</Link>
          </li>
        }
      </ul>
    </div>
  );
}

export default NavPrimaryList;