import Button from '../../Button';
import { NavNode } from './NavPrimary';
import NavPrimaryList from './NavPrimaryList';
import { HistoryNode } from './NavPrimary';

interface Props {
  navItem: NavNode;
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
    <li className="nav-item-parent">
      <Button
        id={props.navItem.id}
        variant="subtle"
        className={
          'nav-link'
          + (isActive ? ' active' : '')
          + (props.navItem.description ? ' has-description' : '')
        }
        aria-expanded={isActive}
        onClick={updateHistory}
      >
        <div className="nav-link-text">
          {props.navItem.text}
        </div>
        {props.navItem.description &&
          <div className="nav-link-description">
            {props.navItem.description}
          </div>
        }
      </Button>
      <NavPrimaryList navItems={ props.navItem.children! } depth={props.depth + 1} activeDepth={props.activeDepth} setActiveDepth={props.setActiveDepth} history={props.history} pushHistory={props.pushHistory} popHistory={props.popHistory} />
    </li>
  );
}

export default NavPrimaryListParent;