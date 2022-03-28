import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant?: string;
}

const Badge = (props: Props): JSX.Element => {
  const { variant } = props;

  let classes = '';
  switch (variant) {
    case 'accent':
      classes = 'ads-badge-accent'
      break;
    case 'accent-dark':
      classes = 'ads-badge-accent-dark'
      break;
    case 'assertive':
      classes = 'ads-badge-assertive'
      break;
    case 'assertive-dark':
      classes = 'ads-badge-assertive-dark'
      break;
    case 'dark':
      classes = 'ads-badge-dark'
      break;
    default:
      classes = 'ads-badge';
      break;
  }

  return (
    <p className={classes}>{props.children}</p>
  );
}

export default Badge;