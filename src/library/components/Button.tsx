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
      classes = 'ads-button-assertive'
      break;
    case 'ghost':
      classes = 'ads-button-ghost'
      break;
    case 'subtle':
      classes = 'ads-button-subtle'
      break;
    default:
      classes = 'ads-button';
      break;
  }

  if (icon) {
    return <button className={`ads-button-icon ${classes}`} {...buttonAttrs}><Icon name={icon} /></button>
  }

  return <button className={`${classes}`} {...buttonAttrs}>{props.children}</button>;

}

export default Button;