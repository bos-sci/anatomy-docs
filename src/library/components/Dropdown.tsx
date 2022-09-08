import { Children, cloneElement, createRef, FunctionComponent, HTMLAttributes, ReactElement, RefObject, useEffect, useRef, useState } from 'react';
import Button from './Button';
import { Props as ButtonProps } from './Button';
import { Props as LinkProps } from './Link';
import DropdownItem, { DropdownItemElements } from './DropdownItem';
import Icon from './icon/Icon';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  triggerText?: string;
  listType?: 'ol' | 'ul';
  icon?: string;
  variant?: string;
  highlightedAction?: ReactElement<ButtonProps | LinkProps>;
  menuPosition?: 'left' | 'right' | 'full';
  children?: DropdownItemElements[] | DropdownItemElements;
}

let dropdownIndex = 0;

// TODO: Allow implementer to add refs to dropdown children. Currently they are being removed in the clone process.
// TODO: Reduce number of refs created for children.

const Dropdown = ({triggerText, listType = 'ul', icon, variant, menuPosition = 'left', children = [], className = '', highlightedAction, ...buttonAttrs}: Props) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState<DropdownItemElements[]>([]);
  const [dropdownId, setDropdownId] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownItemRefs = useRef(Children.map(children, () => createRef<HTMLElement>()));

  const moveFocus = (distance: number) => {
    if (dropdownItemRefs.current) {
      let currentIndex = distance > 0 ? 0 : dropdownItemRefs.current.length - 1;
      let isFocusInMenu = false;
      dropdownItemRefs.current.forEach((item, i) => {
        if (item.current === document.activeElement) {
          currentIndex = i;
          isFocusInMenu = true;
        }
      });

      if (isFocusInMenu) {
        let newIndex = currentIndex + distance;
        if (newIndex > dropdownItemRefs.current.length - 1) {
          newIndex = 0;
        } else if (newIndex < 0) {
          newIndex = dropdownItemRefs.current.length - 1;
        }
        if (dropdownItemRefs.current[newIndex].current?.tagName !== 'BUTTON' && dropdownItemRefs.current[newIndex].current?.tagName !== 'A') {
          moveFocus(distance > 0 ? ++distance : --distance);
        } else {
          dropdownItemRefs.current[newIndex].current?.focus();
        }
      } else {
        dropdownItemRefs.current[currentIndex].current?.focus();
      }
    }
  }

  const updateFocus = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        moveFocus(-1);
        break;

      case 'ArrowDown':
        e.preventDefault();
        moveFocus(1);
        break;

      case 'Escape':
        e.preventDefault();
        setIsDropdownOpen(false);
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    if(highlightedAction) {
      dropdownItemRefs.current.push(createRef());
    }

  }, [highlightedAction, dropdownItemRefs]);

  useEffect(() => {
    if (children) {
      let dropdownItemClones: DropdownItemElements[] = [];

      if (Array.isArray(children)) {
        let lastGroupName: number | null = null;
        const newChildren = Children.map(children, (child: ReactElement, i) => {
          const childComponent = child.type as FunctionComponent;
          if (childComponent.displayName === 'DropdownGroupName') {
            lastGroupName = i;
            return cloneElement(child, {
              ref: dropdownItemRefs.current[i],
              id: dropdownId + 'group' + i,
              role: 'none',
              'aria-hidden': true
            });
          } else {
            const attrs: {
              ref: RefObject<HTMLElement>;
              role: string;
              'aria-describedby'?: string;
            } = {
              ref: dropdownItemRefs.current[i],
              role: 'menuitem'
            }
            if (lastGroupName !== null) {
              attrs['aria-describedby'] = dropdownId + 'group' + lastGroupName;
            }
            return cloneElement(child, attrs);
          }
        });
        dropdownItemClones = newChildren as DropdownItemElements[];
      } else {
        dropdownItemClones = [
          cloneElement(children as ReactElement, {
            ref: dropdownItemRefs.current[0],
            role: 'menuitem'
          })
        ];
      }

      if (highlightedAction) {
        dropdownItemClones.push(cloneElement(highlightedAction as ReactElement, {
          ref: dropdownItemRefs.current[dropdownItemRefs.current.length - 1],
          role: 'menuitem'
        }));
      }

      setDropdownItems(dropdownItemClones);
    }
  }, [children, dropdownId, highlightedAction]);

  useEffect(() => {
    setDropdownId('dropdown' + dropdownIndex++);
  }, []);

  useEffect(() => {
    const onFocusWithinOut = (e: FocusEvent | PointerEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    window.addEventListener('focusin', onFocusWithinOut);
    window.addEventListener('pointerup', onFocusWithinOut);
    return () => {
      window.removeEventListener('focusin', onFocusWithinOut);
      window.removeEventListener('pointerup', onFocusWithinOut);
    }
  }, []);

  const listItems = dropdownItems.map((item, i) => (
    <DropdownItem key={dropdownId + 'item' + i} item={item} isHighlightedAction={highlightedAction && i === dropdownItems.length - 1} />
  ));

  let menuClasses = 'bsds-dropdown-menu';
  switch (menuPosition) {
    case 'right':
      menuClasses += ' right';
      break;
    case 'full':
      menuClasses += ' full';
      break;

    default:
      break;
  }

  return (
    <div ref={dropdownRef} className="bsds-dropdown" onKeyDown={updateFocus}>
      <Button
        variant={variant}
        className={`bsds-dropdown-trigger${className ? ' ' + className : ''}${icon ? ' has-icon' : ''}`}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        {...buttonAttrs}>
          {icon && <Icon size="2x" name={icon} />}
          {triggerText}
      </Button>
        {listType === 'ul' && (
          <ul hidden={!isDropdownOpen} className={menuClasses} role="menu">
            {listItems}
          </ul>
        )}
        {listType === 'ol' && (
          <ol hidden={!isDropdownOpen} className={menuClasses} role="menu">
            {listItems}
          </ol>
        )}
    </div>
  );
}

export default Dropdown;