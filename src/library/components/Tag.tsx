import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant?: string;
}

const Tag = (props: Props): JSX.Element => {
  const { variant } = props;

  let classes = '';
  switch (variant) {
    case 'accent':
      classes = 'lib-tag-accent'
      break;
    case 'accent-ghost':
      classes = 'lib-tag-accent-ghost'
      break;
    case 'assertive':
      classes = 'lib-tag-assertive'
      break;
    case 'assertive-ghost':
      classes = 'lib-tag-assertive-ghost'
      break;
    case 'ghost':
      classes = 'lib-tag-ghost'
      break;
    default:
      classes = 'lib-tag';
      break;
  }

  return (
    <p className={classes}>{props.children}</p>
  );
}

export default Tag;