import { Children, cloneElement, createRef, HTMLAttributes, ReactElement, useEffect, useRef, useState } from 'react';
import Button from './Button';
import { Props as ButtonProps } from './Button';
import { Props as LinkProps } from './Link';
import { Props as DropdownMenuHeadingProps } from './DropdownMenuHeading';
import DropdownMenuItem from './DropdownMenuItem';

export type DropdownItem = ReactElement<ButtonProps | LinkProps | DropdownMenuHeadingProps>;

interface Props extends HTMLAttributes<HTMLButtonElement> {
  triggerText?: string;
  listType?: 'ol' | 'ul';
  icon?: string;
  variant?: string;
  children?: DropdownItem[] | DropdownItem;
  highlightedAction?: ReactElement<ButtonProps | LinkProps>;
}

let dropdownIndex = 0;

// TODO: Allow implementer to add refs to dropdown children. Currently they are being removed in the clone process.

const DropdownMenu = ({triggerText, listType = 'ul', icon, variant, children = [], className = '', highlightedAction, ...buttonAttrs}: Props) => {

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
        if (dropdownItemRefs.current[newIndex].current?.tagName !== 'BUTTON' && dropdownItemRefs.current[newIndex].current?.tagName !== 'A') {
          moveFocus(distance > 0 ? ++distance : --distance);
        } else {
          dropdownItemRefs.current[newIndex].current?.focus();
        }
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
    if(highlightedAction) {
      dropdownItemRefs.current.push(createRef());
    }

  }, [highlightedAction, dropdownItemRefs]);

  useEffect(() => {
    if (children) {
      let dropdownItemClones: DropdownItem[] = [];

      if (Array.isArray(children)) {
        const newChildren = Children.map(children, (child: ReactElement, i) => {
          return cloneElement(child, {
            ref: dropdownItemRefs.current[i],
            role: 'menuitem'
          });
        });
        dropdownItemClones = newChildren as DropdownItem[];
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
  }, [children]);

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
    <DropdownMenuItem key={dropdownId + 'item' + i} item={item} isHighlightAction={highlightedAction && i === dropdownItems.length - 1} />
  ));

  return (
    <div ref={dropdownRef} className="bsds-dropdown" onKeyDown={updateFocus}>
      <Button
        variant={variant}
        icon={icon}
        className={`bsds-dropdown-trigger${className ? ' ' + className : ''}`}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        {...buttonAttrs}>
          {triggerText}
      </Button>
      {isDropdownOpen && <>
        {listType === 'ul' && (
          <ul className="bsds-dropdown-menu" role="menu">
            {listItems}
          </ul>
        )}
        {listType === 'ol' && (
          <ol className="bsds-dropdown-menu" role="menu">
            {listItems}
          </ol>
        )}
      </>}
    </div>
  );
}

export default DropdownMenu;