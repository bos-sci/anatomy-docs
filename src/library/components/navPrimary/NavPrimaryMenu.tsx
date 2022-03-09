import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Button from '../Button';
import IconChevronRight from '../icon/icons/IconChevronRight';
import Link from '../Link';
import { NavItemPrimary } from './NavPrimary';

interface Props {
  navItems: NavItemPrimary[];
  currentRootItem: NavItemPrimary | null;
  setCurrentRootItem: Dispatch<SetStateAction<NavItemPrimary | null>>;
}

const NavPrimaryMenu = ({ navItems, currentRootItem, setCurrentRootItem }: Props): JSX.Element => {

  const [panels, setPanels] = useState<NavItemPrimary[][]>([navItems]);

  useEffect(() => {
    if (currentRootItem?.children) {
      setPanels([navItems, currentRootItem.children]);
    }
  }, [currentRootItem, navItems]);

  const addPanel = (i: number, item: NavItemPrimary): void => {
    if (i === 0) {
      setCurrentRootItem(item);
    }
    if (i === panels.length - 1) {
      setPanels([...panels, item.children!]);
    } else {
      const updatedPanels = [...panels];
      updatedPanels[i + 1] = item.children!;
      setPanels(updatedPanels.slice(0, i + 2));
    }
  }

  const isActive = (navItem: NavItemPrimary, i: number): boolean => {
    if (i === panels.length - 1) {
      return false;
    }
    return navItem.children === panels[i + 1];
  }

  return (
    <div className="nav-menu">
      <div className="nav-menu-panels">
        {currentRootItem &&
          <div className="nav-menu-panel nav-menu-panel-custom">
            <h4>{ currentRootItem.text }</h4>
            <p className="body-subtle">{ currentRootItem.description }</p>
            <Link to={currentRootItem.altTo} href={currentRootItem.altHref} className="body-subtle">{currentRootItem.altLinkText}</Link>
          </div>
        }
        {panels.map((panel, panelIndex) => (
          <ul key={'navPrimaryPanel' + panelIndex} className="nav nav-menu-panel">
            {panel.map((navItem, i) => {
              if (navItem.children) {
                return (
                  <li key={navItem.text + i} className="nav-item-parent">
                    <Button
                      variant="subtle"
                      className={'nav-link' + (isActive(navItem, panelIndex) ? ' active' : '') + (navItem.description ? ' has-description' : '')}
                      id="listParent"
                      onClick={() => addPanel(panelIndex, navItem)}>
                      {navItem.text}
                      <IconChevronRight className="ads-icon-lg"/>
                      <span className="nav-link-description">
                        {navItem.description}
                      </span>
                    </Button>
                  </li>
                );
              } else {
                return (
                  <li key={navItem.text + i} className="nav-item">
                    <a href="#demo" className="nav-link">{navItem.text}</a>
                  </li>
                );
              }
            })}
          </ul>
        ))}
        {/* <ul className="nav nav-menu-panel" aria-labelledby="listParent2">
          <li className="nav-item">
            <a href="#demo" className="nav-link">Nested nav item</a>
          </li>
          <li className="nav-item">
            <a href="#demo" className="nav-link">Nested nav item</a>
          </li>
          <li className="nav-item">
            <a href="#demo" className="nav-link">Nested nav item</a>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default NavPrimaryMenu;