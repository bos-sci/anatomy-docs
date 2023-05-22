import { ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactNode, useEffect, useState } from 'react';
import Icon from './icon/Icon';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: string;
  size?: 'small' | null;
  icon?: string;
  iconAlignment?: 'left' | 'right';
  iconSize?: 'sm' | 'md' | 'lg' | '2x' | '3x' | '4x' | 'base';
}

const Button = forwardRef(
  (
    { children, variant, size, icon, iconAlignment = 'left', iconSize, className, ...buttonAttrs }: Props,
    ref: ForwardedRef<HTMLButtonElement>
  ): JSX.Element => {
    let classes = '';
    switch (variant) {
      case 'assertive':
        classes = 'bsds-button-assertive';
        break;
      case 'ghost':
        classes = 'bsds-button-ghost';
        break;
      case 'subtle':
        classes = 'bsds-button-subtle';
        break;
      default:
        classes = 'bsds-button';
        break;
    }
    let buttonIconSize = iconSize;
    if (size === 'small') {
      buttonIconSize = 'lg';
    }

    const [iconWithChildren, setIconWithChildren] = useState(children);
    useEffect(() => {
      if (icon && children) {
        setIconWithChildren(<span className="bsds-button-text">{children}</span>);
      } else {
        setIconWithChildren(children);
      }
    }, [icon, children]);

    if (icon && !children) {
      return (
        <button ref={ref} className={`bsds-button-icon ${classes} ${className || ''}`} {...buttonAttrs}>
          <Icon name={icon} size={iconSize} />
        </button>
      );
    }

    return (
      <button ref={ref} className={`${classes} ${className || ''} ${size}`} {...buttonAttrs}>
        {!!(icon && iconAlignment === 'left') && <Icon name={icon} size={buttonIconSize} className="bsds-icon-left" />}
        {iconWithChildren}
        {!!(icon && iconAlignment === 'right') && (
          <Icon name={icon} size={buttonIconSize} className="bsds-icon-right" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
