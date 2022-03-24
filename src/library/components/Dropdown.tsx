import { Children, cloneElement, createRef, HTMLAttributes, ReactElement, useEffect, useRef, useState } from 'react';
import Button from './Button';
import { Props as ButtonProps } from './Button';
import { Props as LinkProps } from './Link';

type DropdownItem = ReactElement<ButtonProps | LinkProps>;

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: DropdownItem[] | DropdownItem;
  variant?: string;
  triggerText: string;
}

let dropdownIndex = 0;

// TODO: Allow implementer to add refs to dropdown children. Currently they are being removed in the clone process.

const Dropdown = ({triggerText, variant, children = [], className, ...buttonAttrs}: Props) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>([]);
  const [dropdownId, setDropdownId] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownItemRefs = useRef(Children.map(children, () => createRef<HTMLElement>()));

  const moveFocus = (distance: number) => {
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

  const updateFocus = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowUp':
        moveFocus(-1);
        break;

      case 'ArrowDown':
        moveFocus(1);
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
            id: `${dropdownId}Item${i}`,
            ref: dropdownItemRefs.current[i]
          });
        });
        setDropdownItems(newChildren as DropdownItem[]);
      } else {
        setDropdownItems([
          cloneElement(children, {
            id: `${dropdownId}Item`
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

  return (
    <div ref={dropdownRef} className="ads-dropdown" onKeyDown={updateFocus}>
      <Button
        variant={variant}
        className={'ads-dropdown-trigger ' + className}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        {...buttonAttrs}>
          {triggerText}
      </Button>
      {isDropdownOpen &&
        <div className="ads-dropdown-menu">
          {dropdownItems}
        </div>
      }
    </div>
  );
}

export default Dropdown;