// TODO: do we want to use React's <Link> here? Will React's link mess with our link?

import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { RequireOnlyOne } from '../types';

interface Props {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: string;
  [key: string]: any;
}

//type Props = RequireOnlyOne<Inputs, 'href' | 'to'>;

const Link = (props: Props): JSX.Element => {
  const { variant, href, ...linkAttrs } = props;

  let classes = '';
  switch (variant) {
    case 'subtle':
      classes = 'ads-link-subtle'
      break;
    case 'ghost':
      classes = 'ads-link-ghost'
      break;
    default:
      classes = 'ads-link';
      break;
  }

  if (props.to) {
    return <NavLink to={props.to} className={classes} {...linkAttrs}>{props.children}</NavLink>;
  } else {
    return <a href={props.href} className={classes} {...linkAttrs}>{props.children}</a>;
  }

}

export default Link;