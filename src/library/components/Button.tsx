import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant?: string;
  icon?: boolean;
  [key: string]: any;
}

const Button = (props: Props) => {
  const { variant, icon, ...buttonAttrs } = props;

  let classes = '';
  switch (variant) {
    case 'assertive':
      classes = 'ads-cta-assertive'
      break;
    case 'ghost':
      classes = 'ads-cta-ghost'
      break;
    default:
      classes = '';
      break;
  }

  if (icon) {
    classes += ' ads-cta-icon'
  }

  return (
    <button className={`ads-cta ${classes}`} {...buttonAttrs}>{props.children}</button>
  );
}

export default Button;