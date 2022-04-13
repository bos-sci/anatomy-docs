import Link from '../../Link';
import { NavNode } from './NavWizard';
import NavWizardListParent from './NavWizardListParent';
import { HistoryNode } from './NavWizard';

interface Props {
  navItems: NavNode[];
  depth: number;
  history: HistoryNode[];
  pushHistory: (navItem: NavNode, depth: number) => void;
  popHistory: () => void;
}

const NavWizardList = (props: Props) => {
  const parent = props.navItems[0].parent;
  return (
    <ul
      className=
        {'nav'
        + ((props.history.length === 0 && props.depth === 0) || ((parent && props.history[props.history.length - 1]?.node === parent)) ? ' nav-active-list' : '')
      }
      aria-describedby={parent?.id}>
      {props.navItems.map((navItem, i) => {
        if (navItem.children) {
          // Parent Button
          return <NavWizardListParent key={navItem.text + i} navItem={navItem} depth={props.depth} history={props.history} pushHistory={props.pushHistory} popHistory={props.popHistory} />;
        } else {
          return (
            // Leaf Node
            <li key={navItem.text + i} className="nav-item">
              <Link href={navItem.href} to={navItem.slug} className="nav-link">{navItem.text}</Link>
            </li>
          );
        }
      })}

      {/* Overflow Link */}
      {parent?.overflowLinkText &&
        <li key={parent.overflowLinkText + props.depth} className="nav-item nav-item-overflow">
          <Link href={parent.overflowHref} to={parent.overflowTo} className="nav-link-see-all">{parent.overflowLinkText}</Link>
        </li>
      }
    </ul>
  );
}

export default NavWizardList;