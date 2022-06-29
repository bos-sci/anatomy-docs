// TODO: do we want to use React's <Link> here? Will React's link mess with our link?

import { AnchorHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from 'react';
import { NavLink, Link as RouterLink } from 'react-router-dom';

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: string;
  isNavLink?: boolean;
}

//type Props = RequireOnlyOne<Inputs, 'href' | 'to'>;

const Link = forwardRef((props: Props, ref: ForwardedRef<HTMLAnchorElement>): JSX.Element => {
  const { variant, href, ...linkAttrs } = props;

  let classes = '';
  switch (variant) {
    case 'subtle':
      classes = 'ads-link-subtle'
      break;
    case 'ghost':
      classes = 'ads-link-ghost'
      break;
    case 'cta':
      classes = 'ads-link-cta'
      break;
    default:
      classes = 'ads-link';
      break;
  }

  if (props.to) {
    if (props.isNavLink) {
      return <NavLink ref={ref} to={props.to} className={classes} {...linkAttrs}>{props.children}</NavLink>;
    } else {
      return <RouterLink ref={ref} to={props.to} className={classes} {...linkAttrs}>{props.children}</RouterLink>;
    }
  } else {
    return <a ref={ref} href={props.href} className={classes} {...linkAttrs}>{props.children}</a>;
  }

});

export default Link;