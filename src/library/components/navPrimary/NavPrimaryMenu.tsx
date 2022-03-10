import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Button from '../Button';
import IconChevronRight from '../icon/icons/IconChevronRight';
import Link from '../Link';
import { NavItemPrimary, NavNode } from './NavPrimary';

interface Props {
  navItems: NavNode[];
  currentRootItem: NavNode | null;
  setCurrentRootItem: Dispatch<SetStateAction<NavNode | null>>;
}

const NavPrimaryMenu = ({ navItems, currentRootItem, setCurrentRootItem }: Props): JSX.Element => {

  const [panels, setPanels] = useState<NavNode[][]>([navItems]);

  useEffect(() => {
    if (currentRootItem?.children) {
      setPanels([navItems, currentRootItem.children]);
    }
  }, [currentRootItem, navItems]);

  const addPanel = (i: number, item: NavNode): void => {
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

  const isActive = (navItem: NavNode, i: number): boolean => {
    if (i === panels.length - 1) {
      return false;
    }
    return navItem.children === panels[i + 1];
  }

  return (
    <div className="nav-menu">
      {panels.length > 1 && <Button type="button" className="nav-menu-back" onClick={() => setPanels(panels.slice(0, -1))}>⬅️Back</Button>}
      <div className="nav-menu-panels">
        {panels.map((panel, panelIndex) => (
          <div key={'navPrimaryPanel' + panelIndex} className={'nav-menu-panel' + (panel[0].parent?.altLinkText && panelIndex === 1 ? ' has-header' : '')}>
            {panel[0].parent?.altLinkText && panelIndex === 1 &&
              <div className="nav-menu-panel-header">
                <h4>{ panel[0].parent.text }</h4>
                <p className="body-subtle">{ panel[0].parent.description }</p>
                <Link to={panel[0].parent.altTo} href={panel[0].parent.altHref} className="body-subtle">
                  {panel[0].parent.altLinkText}
                </Link>
              </div>
            }
            <ul className="nav">
              {panel.map((navItem, i) => {
                if (navItem.children) {
                  return (
                    <li key={navItem.text + i} className="nav-item-parent">
                      <Button
                        variant="subtle"
                        className={
                          'nav-link'
                          + (isActive(navItem, panelIndex) ? ' active' : '')
                          + (navItem.description ? ' has-description' : '')
                        }
                        id="listParent"
                        onClick={() => addPanel(panelIndex, navItem)}>
                        {navItem.text}
                        <IconChevronRight className="ads-icon-lg"/>
                        {navItem.description &&
                          <span className="nav-link-description">
                            {navItem.description}
                          </span>
                        }
                      </Button>
                    </li>
                  );
                } else {
                  return (
                    <li key={navItem.text + i} className="nav-item">
                      <Link href={navItem.href} to={navItem.slug} className="nav-link">{navItem.text}</Link>
                    </li>
                  );
                }
              })}
              {panel[0].parent?.altLinkText && panelIndex !== 1  &&
                <li key={panel[0].parent.altLinkText + panelIndex} className="nav-item">
                  <Link href={panel[0].parent.altHref} to={panel[0].parent.altTo} className="nav-link nav-link-see-all">{panel[0].parent.altLinkText}</Link>
                </li>
              }
            </ul>
          </div>
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