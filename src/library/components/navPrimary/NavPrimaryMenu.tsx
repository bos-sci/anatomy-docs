import { Dispatch, FocusEvent, ForwardedRef, forwardRef, SetStateAction, useEffect, useRef, useState } from 'react';
import Button from '../Button';
import Link from '../Link';
import { NavNode } from './NavPrimary';

interface Props {
  navItems: NavNode[];
  currentRootItem: NavNode | null;
  setCurrentRootItem: Dispatch<SetStateAction<NavNode | null>>;
}

const NavPrimaryMenu = forwardRef(({ navItems, currentRootItem, setCurrentRootItem }: Props, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

  const [panels, setPanels] = useState<NavNode[][]>([navItems]);

  const panelsRef = useRef<HTMLDivElement>(null);

  /* interface PanelRefs {
    [key: string]: HTMLUListElement;
  }
  const panelRefs = useRef([]);

  useEffect(() => {
    console.log('updating refs');
    panelRefs.current = panels.map((_, i) => panelRefs.current[i] ?? createRef<HTMLUListElement>());
  }, [panels]); */

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

  const removePanel = (targetPanel: NavNode[]) => {
    setPanels(panels.slice(0, panels.indexOf(targetPanel)));
  }

  const updatePanels = (i: number, item: NavNode) => {
    if (item.children && panels.includes(item.children)) {
      removePanel(item.children);
    } else {
      addPanel(i, item);
    }
  }

  const isActive = (navItem: NavNode, i: number): boolean => {
    if (navItem.children) {
      return panels.includes(navItem.children);
    } else {
      return false;
    }
  }

  /* const manageFocus = (e: FocusEvent, currentIndex: number) => {
    if (e.target.getAttribute('aria-expanded') === 'true') {
      (panelsRef.current?.children[currentIndex + 1].children[0] as HTMLUListElement).focus();
    }
  } */

  return (
    <div ref={ref} className="nav-menu" tabIndex={-1}>
      {panels.length > 1 &&
        <Button
          type="button"
          variant="subtle"
          className="nav-menu-back"
          onClick={() => setPanels(panels.slice(0, -1))}>
          Back to {panels[panels.length - 1][0].parent?.text.toLocaleLowerCase()}
        </Button>
      }
      <div ref={panelsRef} className="nav-menu-panels">
        {panels.map((panel, panelIndex) => (
          <div key={'navPrimaryPanel' + panelIndex} className={'nav-menu-panel' + (panel[0].parent?.altLinkText && panelIndex === 1 ? ' has-header' : '')}>
            {panel[0].parent?.altLinkText && panelIndex === 1 &&
              <div className="nav-menu-panel-header">
                <h4>{ panel[0].parent.text }</h4>
                <p className="body-subtle">{ panel[0].parent.description }</p>
                <Link to={panel[0].parent.altTo} href={panel[0].parent.altHref} className="body-subtle nav-menu-panel-header-link">
                  {panel[0].parent.altLinkText}
                </Link>
              </div>
            }
            <ul tabIndex={-1} className="nav" aria-describedby={panel[0].parent?.id}>
              {panel.map((navItem, i) => {
                if (navItem.children) {
                  // Parent Button
                  return (
                    <li key={navItem.text + i} className="nav-item-parent">
                      <Button
                        id={navItem.id}
                        variant="subtle"
                        className={
                          'nav-link'
                          + (isActive(navItem, panelIndex) ? ' active' : '')
                          + (navItem.description ? ' has-description' : '')
                        }
                        aria-expanded={isActive(navItem, panelIndex)}
                        aria-haspopup="menu" // Do we need/want this here? If we do, lets add to header items too.
                        //onBlur={(e) => manageFocus(e, panelIndex)}
                        onClick={() => updatePanels(panelIndex, navItem)}>
                        <div className="nav-link-text">
                          {navItem.text}
                        </div>
                        {navItem.description &&
                          <div className="nav-link-description">
                            {navItem.description}
                          </div>
                        }
                      </Button>
                    </li>
                  );
                } else {
                  return (
                    // Leaf Node
                    <li key={navItem.text + i} className="nav-item">
                      <Link href={navItem.href} to={navItem.slug} className="nav-link">{navItem.text}</Link>
                    </li>
                  );
                }
              })}

              {/* Bottom Link */}
              {panel[0].parent?.altLinkText && panelIndex !== 1  &&
                <li key={panel[0].parent.altLinkText + panelIndex} className="nav-item">
                  <Link href={panel[0].parent.altHref} to={panel[0].parent.altTo} className="nav-link nav-link-see-all">{panel[0].parent.altLinkText}</Link>
                </li>
              }
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
});

export default NavPrimaryMenu;