import { Children, cloneElement, createRef, HTMLAttributes, ReactElement, useEffect, useRef, useState } from 'react';
import Button from './Button';
import { Props as ButtonProps } from './Button';
import IconChevronDown from './icon/icons/IconChevronDown';
import { Props as LinkProps } from './Link';

type DropdownItem = ReactElement<ButtonProps | LinkProps>;

interface Props extends HTMLAttributes<HTMLButtonElement> {
  triggerText?: string;
  listType?: 'ol' | 'ul';
  icon?: string;
  variant?: string;
  children?: DropdownItem[] | DropdownItem;
}

let dropdownIndex = 0;

// TODO: Allow implementer to add refs to dropdown children. Currently they are being removed in the clone process.

const Dropdown = ({triggerText, listType = 'ul', icon, variant, children = [], className = '', ...buttonAttrs}: Props) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>([]);
  const [dropdownId, setDropdownId] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownItemRefs = useRef(Children.map(children, () => createRef<HTMLElement>()));

  const moveFocus = (distance: number) => {
    if (dropdownItemRefs.current) {
      let currentIndex = 0;
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
        dropdownItemRefs.current[newIndex].current?.focus();
      } else {
        dropdownItemRefs.current[0].current?.focus();
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
    if (children) {
      if (Array.isArray(children)) {
        const newChildren = Children.map(children, (child: ReactElement, i) => {
          return cloneElement(child, {
            ref: dropdownItemRefs.current[i],
            role: 'menuitem'
          });
        });
        setDropdownItems(newChildren as DropdownItem[]);
      } else {
        setDropdownItems([
          cloneElement(children, {
            id: `${dropdownId}Item`,
            role: 'menuitem'
          })
        ]);
      }
    }
  }, [children, dropdownId]);

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
    <li key={dropdownId + 'item' + i} className="ads-dropdown-item" role="none">
      {item}
    </li>
  ));

  return (
    <div ref={dropdownRef} className="ads-dropdown" onKeyDown={updateFocus}>
      <Button
        variant={variant}
        icon={icon}
        className={`ads-dropdown-trigger${className ? ' ' + className : ''}`}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        {...buttonAttrs}>
          {triggerText}
          <IconChevronDown className="ads-icon-lg u-icon-right ads-dropdown-trigger-chevron" />
      </Button>
      {isDropdownOpen && <>
        {listType === 'ul' && (
          <ul className="ads-dropdown-menu" role="menu">
            {listItems}
          </ul>
        )}
        {listType === 'ol' && (
          <ol className="ads-dropdown-menu" role="menu">
            {listItems}
          </ol>
        )}
      </>}
    </div>
  );
}

export default Dropdown;