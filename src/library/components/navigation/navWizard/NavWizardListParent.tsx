import Button from '../../Button';
import { NavNode } from './NavWizard';
import NavWizardList from './NavWizardList';
import { HistoryNode } from './NavWizard';
import IconChevronRight from '../../icon/icons/IconChevronRight';

interface Props {
  navItem: NavNode;
  depth: number;
  history: HistoryNode[];
  pushHistory: (navItem: NavNode, depth: number) => void;
  popHistory: () => void;
  focusBackBtn: () => void;
}

const NavWizardListParent = (props: Props) => {

  const updateHistory = () => {
    props.pushHistory(props.navItem, props.depth);
    props.focusBackBtn();
  }

  const isActive = Array.from(props.history, h => h.node).includes(props.navItem);
  return (
    <li className="ads-nav-item-parent">
      <Button
        id={props.navItem.id}
        variant="subtle"
        className={
          'ads-nav-link'
        }
        aria-expanded={isActive}
        onClick={updateHistory}
      >
        <span className="ads-nav-link-text">
          {props.navItem.text}
        </span>
        <div className="ads-nav-link-addon">
          <IconChevronRight className="ads-icon-2x"/>
        </div>
      </Button>
      <NavWizardList navItems={ props.navItem.children! } depth={props.depth + 1} history={props.history} pushHistory={props.pushHistory} popHistory={props.popHistory} focusBackBtn={props.focusBackBtn} />
    </li>
  );
}

export default NavWizardListParent;