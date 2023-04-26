// TODO: ADS-383 pass down NavLink props e.g. "end"

import { AnchorHTMLAttributes, ForwardedRef, forwardRef, ReactNode, useState, useEffect } from 'react';
import { NavLink, Link as RouterLink } from 'react-router-dom';

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: string;
  isNavLink?: boolean;
  target?: string;
  rel?: string;
}

const Link = forwardRef(
  (
    { variant, href, to, isNavLink, className, children, target, rel, ...linkAttrs }: Props,
    ref: ForwardedRef<HTMLAnchorElement>
  ): JSX.Element => {
    let classes = '';
    switch (variant) {
      case 'subtle':
        classes = 'bsds-link-subtle';
        break;
      case 'ghost':
        classes = 'bsds-link-ghost';
        break;
      case 'cta':
        classes = 'bsds-link-cta';
        break;
      default:
        classes = 'bsds-link';
        break;
    }

    const [relAttr, setRelAttr] = useState(rel);

    useEffect(() => {
      if (target === '_blank') {
        setRelAttr('noreferrer');
      }
    }, [target]);

    useEffect(() => {
      if (href === '#') {
        console.warn('Do not use invalid href attribute values.');
      }
    }, [href]);

    if (to) {
      if (isNavLink) {
        return (
          <NavLink ref={ref} to={to} className={`${classes} ${className}`} target={target} rel={relAttr} {...linkAttrs}>
            {children}
          </NavLink>
        );
      } else {
        return (
          <RouterLink
            ref={ref}
            to={to}
            className={`${classes} ${className}`}
            target={target}
            rel={relAttr}
            {...linkAttrs}
          >
            {children}
          </RouterLink>
        );
      }
    } else {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a ref={ref} href={href} className={`${classes} ${className}`} target={target} rel={relAttr} {...linkAttrs}>
          {children}
        </a>
      );
    }
  }
);

Link.displayName = 'Link';
export default Link;
