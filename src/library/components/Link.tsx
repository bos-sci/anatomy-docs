// TODO: do we want to use React's <Link> here? Will React's link mess with our link?

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  variant?: string;
  [key: string]: any;
}

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

  return (
    <a href={props.href} className={classes} {...linkAttrs}>{props.children}</a>
  );
}

export default Link;