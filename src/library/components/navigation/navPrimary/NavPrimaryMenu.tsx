import { ForwardedRef, forwardRef, useState } from 'react';
import Button from '../../Button';
import Dropdown from '../../Dropdown';
import Link from '../../Link';
import { HistoryNode, NavItemUtility, NavNode } from './NavPrimary';
import NavPrimaryList from './NavPrimaryList';

interface Props {
  navItems: NavNode[];
  utilityItems?: NavItemUtility[];
  footerItems?: NavItemUtility[];
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
      {(props.history.length === 0 && props.utilityItems) &&
        <ul className="nav nav-block">
          {props.utilityItems.map((item, i) => (
            // TODO: Should this be a select instead of a dropdown?
            <li key={'utilityItem' + i} className="nav-item">
              {item.children ?
                <Dropdown key={'utilityItem' + item.text + i} triggerText={item.text} className="nav-link">
                  {item.children.map((child, childI) => (
                    <Link key={child.text + childI} href={child.href} to={child.slug}>{child.text}</Link>
                  ))}
                </Dropdown>
                : <Link to={item.slug} href={item.href} className="nav-link">{item.text}</Link>
              }
            </li>
          ))}
        </ul>
      }
      {(props.history.length === 0 && props.footerItems) &&
        <ul className="nav nav-block">
          {props.footerItems.map((item, i) => (
            <li key={'footerItem' + i} className="nav-item">
              <Link to={item.slug} href={item.href} className="nav-link">{item.text}</Link>
            </li>
          ))}
        </ul>
      }
    </div>
  );
});

export default NavPrimaryMenu;