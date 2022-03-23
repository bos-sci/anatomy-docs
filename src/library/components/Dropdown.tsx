import { HTMLAttributes, ReactElement, useEffect, useRef, useState } from 'react';
import Button from './Button';
import { Props as ButtonProps } from './Button';
import { Props as LinkProps } from './Link';

type DropdownItem = ReactElement<ButtonProps | LinkProps>;

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: DropdownItem[] | DropdownItem;
  variant?: string;
  triggerText: string;
}

const Dropdown = ({triggerText, variant, children, className, ...buttonAttrs}: Props) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);


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
    <div ref={dropdownRef} className="ads-dropdown">
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
          {children}
        </div>
      }
    </div>
  );
}

export default Dropdown;