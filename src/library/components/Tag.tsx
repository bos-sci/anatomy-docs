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
      classes = 'ads-tag-accent'
      break;
    case 'accent-ghost':
      classes = 'ads-tag-accent-ghost'
      break;
    case 'assertive':
      classes = 'ads-tag-assertive'
      break;
    case 'assertive-ghost':
      classes = 'ads-tag-assertive-ghost'
      break;
    case 'ghost':
      classes = 'ads-tag-ghost'
      break;
    default:
      classes = 'ads-tag';
      break;
  }

  return (
    <p className={classes}>{props.children}</p>
  );
}

export default Tag;