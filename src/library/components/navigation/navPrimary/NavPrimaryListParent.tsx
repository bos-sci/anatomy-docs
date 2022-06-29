import Button from '../../Button';
import { NavNode } from './NavPrimary';
import NavPrimaryList from './NavPrimaryList';
import { HistoryNode } from './NavPrimary';

interface Props {
  navItem: NavNode;
  setActiveNode: (node: NavNode) => void;
  depth: number;
  activeDepth: number;
  setActiveDepth: (activeDepth: number) => void;
  history: HistoryNode[];
  pushHistory: (navItem: NavNode, depth: number) => void;
  popHistory: () => void;
}

const NavPrimaryListParent = (props: Props) => {

  const updateHistory = () => {
    if (props.history.length && props.navItem === props.history[props.history.length - 1].node) {
      props.popHistory();
    } else {
      props.pushHistory(props.navItem, props.depth);
    }
  }

  const isActive = Array.from(props.history, h => h.node).includes(props.navItem);
  return (
    <li className="ads-nav-item-parent">
      <Button
        id={props.navItem.id}
        variant="subtle"
        className={
          'ads-nav-link'
          + (isActive ? ' active' : '')
        }
        aria-expanded={isActive}
        onClick={updateHistory}
      >
        <div className="ads-nav-link-text">
          {props.navItem.text}
        </div>
        {props.navItem.description &&
          <div className="ads-nav-link-description">
            {props.navItem.description}
          </div>
        }
      </Button>
      <NavPrimaryList
        navItems={props.navItem.children!}
        setActiveNode={props.setActiveNode}
        depth={props.depth + 1}
        activeDepth={props.activeDepth}
        setActiveDepth={props.setActiveDepth}
        history={props.history}
        pushHistory={props.pushHistory}
        popHistory={props.popHistory} />
    </li>
  );
}

export default NavPrimaryListParent;