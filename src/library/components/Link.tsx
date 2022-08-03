// TODO: We should figure out how to pass down NavLink props e.g. "end"

import { AnchorHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from 'react';
import { NavLink, Link as RouterLink } from 'react-router-dom';

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: string;
  isNavLink?: boolean;
}

const Link = forwardRef(({ variant, href, to, isNavLink, className, children, ...linkAttrs }: Props, ref: ForwardedRef<HTMLAnchorElement>): JSX.Element => {

  let classes = '';
  switch (variant) {
    case 'subtle':
      classes = 'lib-link-subtle'
      break;
    case 'ghost':
      classes = 'lib-link-ghost'
      break;
    case 'cta':
      classes = 'lib-link-cta'
      break;
    default:
      classes = 'lib-link';
      break;
  }

  if (to) {
    if (isNavLink) {
      return <NavLink ref={ref} to={to} className={`${classes} ${className}`} {...linkAttrs}>{children}</NavLink>;
    } else {
      return <RouterLink ref={ref} to={to} className={`${classes} ${className}`} {...linkAttrs}>{children}</RouterLink>;
    }
  } else {
    return <a ref={ref} href={href} className={`${classes} ${className}`} {...linkAttrs}>{children}</a>;
  }

});

export default Link;