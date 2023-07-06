import { ForwardedRef, forwardRef, useState } from 'react';
import Button from 'library/components/Button';
import Dropdown from 'library/components/Dropdown';
import Link from 'library/components/Link';
import { HistoryNode, NavItemUtility, NavNode, Texts } from './NavPrimary';
import NavPrimaryList from './NavPrimaryList';

interface Props {
  navItems: NavNode[];
  utilityItems?: NavItemUtility[];
  activeNode: NavNode | null;
  setActiveNode: (node: NavNode) => void;
  menuId: string;
  isMenuOpen: boolean;
  isIntermediateNav: boolean;
  history: HistoryNode[];
  pushHistory: (navItem: NavNode, depth: number) => void;
  popHistory: () => void;
  texts?: Texts;
}

const NavPrimaryMenu = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [activeDepth, setActiveDepth] = useState(0);

  return (
    <div
      ref={ref}
      id={props.menuId}
      className={'bsds-nav-menu' + (props.isMenuOpen ? ' open' : '') + (props.isIntermediateNav ? ' intermediate' : '')}
    >
      {props.history.length > 0 && (
        <Button type="button" className="bsds-button-nav-back" onClick={() => props.popHistory()}>
          {props.texts?.menuBackButton ? props.texts.menuBackButton : 'Back'}
        </Button>
      )}
      <div className="bsds-nav-menu-panels">
        <NavPrimaryList
          navItems={props.navItems}
          activeNode={props.activeNode}
          setActiveNode={props.setActiveNode}
          depth={0}
          activeDepth={activeDepth}
          setActiveDepth={setActiveDepth}
          history={props.history}
          pushHistory={props.pushHistory}
          popHistory={props.popHistory}
        />
      </div>
      {props.history.length === 0 && !!props.utilityItems && (
        <ul className="bsds-nav bsds-nav-block">
          {props.utilityItems.map((item) => (
            <li key={'utilityItem' + item.text} className="bsds-nav-item">
              {item.children ? (
                <Dropdown key={'utilityItemDropdown' + item.text} triggerText={item.text} className="bsds-nav-link">
                  {item.children.map((child) => (
                    <Link key={'utilityItemDropdownChild' + child.slug} href={child.href} to={child.slug}>
                      {child.text}
                    </Link>
                  ))}
                </Dropdown>
              ) : (
                <Link to={item.slug} href={item.href} className="bsds-nav-link">
                  {item.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

NavPrimaryMenu.displayName = 'NavPrimaryMenu';
export default NavPrimaryMenu;
