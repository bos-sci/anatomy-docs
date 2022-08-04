import Button from '../../Button';
import { NavNode } from './NavWizard';
import NavWizardList from './NavWizardList';
import { HistoryNode } from './NavWizard';
import IconChevronRight from '../../icon/icons/IconChevronRight';
import { RefObject, useRef } from 'react';

interface Props {
  navItem: NavNode;
  depth: number;
  history: HistoryNode[];
  pushHistory: (navItem: NavNode, depth: number, ref: RefObject<HTMLButtonElement>) => void;
  popHistory: () => void;
  focusBackBtn: () => void;
}

const NavWizardListParent = (props: Props) => {

  const navItemParentRef = useRef<HTMLButtonElement>(null);

  const updateHistory = () => {
    props.pushHistory(props.navItem, props.depth, navItemParentRef);
    props.focusBackBtn();
  }

  const isActive = Array.from(props.history, h => h.node).includes(props.navItem);
  return (
    <li className="bsds-nav-item-parent">
      <Button
        ref={navItemParentRef}
        id={props.navItem.id}
        variant="subtle"
        className={
          'bsds-nav-link'
        }
        aria-expanded={isActive}
        onClick={updateHistory}
      >
        <span className="bsds-nav-link-text">
          {props.navItem.text}
        </span>
        <div className="bsds-nav-link-addon">
          <IconChevronRight className="bsds-icon-2x"/>
        </div>
      </Button>
      <NavWizardList navItems={ props.navItem.children! } depth={props.depth + 1} history={props.history} pushHistory={props.pushHistory} popHistory={props.popHistory} focusBackBtn={props.focusBackBtn} />
    </li>
  );
}

export default NavWizardListParent;