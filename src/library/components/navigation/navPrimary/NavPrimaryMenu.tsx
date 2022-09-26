import { ForwardedRef, forwardRef, useState } from 'react';
import Button from '../../Button';
import Dropdown from '../../Dropdown';
import Link from '../../Link';
import { HistoryNode, NavItemUtility, NavNode } from './NavPrimary';
import NavPrimaryList from './NavPrimaryList';

interface Props {
  navItems: NavNode[];
  utilityItems?: NavItemUtility[];
  setActiveNode: (node: NavNode) => void;
  menuId: string;
  isMenuOpen: boolean;
  isIntermediateNav: boolean;
  history: HistoryNode[];
  pushHistory: (navItem: NavNode, depth: number) => void;
  popHistory: () => void;
}

const NavPrimaryMenu = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

  const [activeDepth, setActiveDepth] = useState(0);

  return (
    <div ref={ref} id={props.menuId} className={"bsds-nav-menu" + (props.isMenuOpen ? ' open' : '') + (props.isIntermediateNav ? ' intermediate' : '')}>
      {props.history.length > 0 &&
        <Button type="button" className="bsds-button-nav-back" onClick={() => props.popHistory()}>Back</Button>
      }
      <div className="bsds-nav-menu-panels">
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
      {(props.history.length === 0 && props.utilityItems) &&
        <ul className="bsds-nav bsds-nav-block">
          {props.utilityItems.map((item, i) => (
            <li key={'utilityItem' + i} className="bsds-nav-item">
              {item.children ?
                <Dropdown key={'utilityItem' + item.text + i} triggerText={item.text} className="bsds-nav-link">
                  {item.children.map((child, childI) => (
                    <Link key={child.text + childI} href={child.href} to={child.slug}>{child.text}</Link>
                  ))}
                </Dropdown>
                : <Link to={item.slug} href={item.href} className="bsds-nav-link">{item.text}</Link>
              }
            </li>
          ))}
        </ul>
      }
    </div>
  );
});

export default NavPrimaryMenu;