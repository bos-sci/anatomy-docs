import { ReactNode } from 'react';
import Icon from './icon/Icon';

interface Props {
  children?: ReactNode;
  variant?: string;
  icon?: string;
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
    case 'subtle':
      classes = 'ads-cta-subtle'
      break;
    default:
      classes = '';
      break;
  }

  if (icon) {
    return <button className={`ads-cta ads-cta-icon ${classes}`}><Icon name={icon} /></button>
  }

  return <button className={`ads-cta ${classes}`} {...buttonAttrs}>{props.children}</button>;

}

export default Button;