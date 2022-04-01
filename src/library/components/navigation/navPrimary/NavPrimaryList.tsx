import Link from '../../Link';
import { NavNode } from './NavPrimary';
import NavPrimaryListParent from './NavPrimaryListParent';
import { HistoryNode } from './NavPrimary';

interface Props {
  navItems: NavNode[];
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
        'nav-menu-panel'
        + (parent?.altLinkText && props.depth === 1 ? ' has-header' : '')
        //+ (((parent && Array.from(props.history, h => h.node).includes(parent)) || props.depth === 0) ? ' nav-active-list' : '')
        + ((props.history.length === 0 && props.depth === 0) || ((parent && props.history[props.history.length - 1]?.node === parent)) ? ' nav-active-list' : '')
      }
    >
      {parent?.altLinkText && props.depth === 1 &&
        <div className="nav-menu-panel-header">
          <h4>{ parent.text }</h4>
          <p className="body-subtle">{ parent.description }</p>
          <Link to={parent.altTo} href={parent.altHref} className="body-subtle nav-menu-panel-header-link">
            {parent.altLinkText}
          </Link>
        </div>
      }
      <ul className="nav" aria-describedby={parent?.id}>
        {props.navItems.map((navItem, i) => {
          if (navItem.children) {
            // Parent Button
            return <NavPrimaryListParent key={navItem.text + i} navItem={navItem} depth={props.depth} activeDepth={props.activeDepth} setActiveDepth={props.setActiveDepth} history={props.history} pushHistory={props.pushHistory} popHistory={props.popHistory} />;
          } else {
            return (
              // Leaf Node
              <li key={navItem.text + i} className="nav-item">
                <Link href={navItem.href} to={navItem.slug} className="nav-link">{navItem.text}</Link>
              </li>
            );
          }
        })}

        {/* Bottom Link */}
        {parent?.altLinkText && props.depth !== 1  &&
          <li key={parent.altLinkText + props.depth} className="nav-item">
            <Link href={parent.altHref} to={parent.altTo} className="nav-link nav-link-see-all">{parent.altLinkText}</Link>
          </li>
        }
      </ul>
    </div>
  );
}

export default NavPrimaryList;