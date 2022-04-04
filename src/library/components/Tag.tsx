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
    case 'accent-dark':
      classes = 'ads-tag-accent-dark'
      break;
    case 'assertive':
      classes = 'ads-tag-assertive'
      break;
    case 'assertive-dark':
      classes = 'ads-tag-assertive-dark'
      break;
    case 'dark':
      classes = 'ads-tag-dark'
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