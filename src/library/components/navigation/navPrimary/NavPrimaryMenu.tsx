import { ForwardedRef, forwardRef, useState } from 'react';
import Button from '../../Button';
import { HistoryNode, NavNode } from './NavPrimary';
import NavPrimaryList from './NavPrimaryList';

interface Props {
  navItems: NavNode[];
  setActiveNode: (node: NavNode) => void;
  isMenuOpen: boolean;
  history: HistoryNode[];
  pushHistory: (navItem: NavNode, depth: number) => void;
  popHistory: () => void;
}

const NavPrimaryMenu = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

  const [activeDepth, setActiveDepth] = useState(0);

  return (
    <div ref={ref} className={"nav-menu" + (props.isMenuOpen ? ' open' : '')} tabIndex={-1}>
      {props.history.length > 0 &&
        <Button
          type="button"
          variant="subtle"
          className="nav-menu-back"
          onClick={() => props.popHistory()}>
          Back {/* to {panels[panels.length - 1][0].parent?.text.toLocaleLowerCase()} */}
        </Button>
      }
      <div className="nav-menu-panels">
        <NavPrimaryList
          navItems={ props.navItems }
          setActiveNode={props.setActiveNode}
          depth={0}
          activeDepth={activeDepth}
          setActiveDepth={setActiveDepth}
          history={props.history}
          pushHistory={props.pushHistory}
          popHistory={props.popHistory} />
      </div>
    </div>
  );
});

export default NavPrimaryMenu;