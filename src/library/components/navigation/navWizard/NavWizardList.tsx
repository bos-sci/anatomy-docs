import Link from '../../Link';
import { NavNode } from './NavWizard';
import NavWizardListParent from './NavWizardListParent';
import { HistoryNode } from './NavWizard';
import { RefObject } from 'react';

interface Props {
  navItems: NavNode[];
  depth: number;
  history: HistoryNode[];
  pushHistory: (navItem: NavNode, depth: number, ref: RefObject<HTMLButtonElement>) => void;
  popHistory: () => void;
  focusBackBtn: () => void;
}

const NavWizardList = (props: Props) => {
  const parent = props.navItems[0].parent;
  return (
    <ul
      className=
        {'lib-nav'
        + ((props.history.length === 0 && props.depth === 0) || ((parent && props.history[props.history.length - 1]?.node === parent)) ? ' lib-nav-active-list' : '')
        + (props.navItems.length === 1 ? ' has-one-col' : '')
        + (props.navItems.length === 2 ? ' has-two-col' : '')
      }
      role={(props.history.length === 0 && props.depth === 0) || ((parent && props.history[props.history.length - 1]?.node === parent)) ? 'list' : 'none'}
      aria-describedby={parent?.id}>
      {props.navItems.map((navItem, i) => {
        if (navItem.children) {
          // Parent Button
          return <NavWizardListParent key={navItem.text + i} navItem={navItem} depth={props.depth} history={props.history} pushHistory={props.pushHistory} popHistory={props.popHistory} focusBackBtn={props.focusBackBtn} />;
        } else {
          return (
            // Leaf Node
            <li key={navItem.text + i} className="lib-nav-item">
              <Link href={navItem.href} to={navItem.slug} className="lib-nav-link" isNavLink>{navItem.text}</Link>
            </li>
          );
        }
      })}

      {/* Overflow Link */}
      {parent?.overflowLinkText &&
        <li key={parent.overflowLinkText + props.depth} className="lib-nav-item lib-nav-item-overflow">
          <Link href={parent.overflowHref} to={parent.overflowTo}>{parent.overflowLinkText}</Link>
        </li>
      }
    </ul>
  );
}

export default NavWizardList;