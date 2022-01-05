import { ReactNode } from 'react';
import Icon from './icon/Icon';

interface Props {
  children?: ReactNode;
  variant?: string;
  icon?: string;
  iconAlignment?: 'left' | 'right';
  [key: string]: any;
}

const Button = ({ children, variant, icon, iconAlignment = 'left', ...buttonAttrs }: Props): JSX.Element => {
  let classes = '';
  switch (variant) {
    case 'assertive':
      classes = 'ads-button-assertive';
      break;
    case 'ghost':
      classes = 'ads-button-ghost';
      break;
    case 'subtle':
      classes = 'ads-button-subtle';
      break;
    default:
      classes = 'ads-button';
      break;
  }

  if (icon && !children) {
    return <button className={`ads-button-icon ${classes}`} {...buttonAttrs}><Icon name={icon} /></button>;
  }

  return (
    <button className={`${classes}`} {...buttonAttrs}>
      { icon && iconAlignment === 'left' && <Icon name={icon} className="u-icon-left" /> }
      { icon && children ? <span className="ads-button-text">{ children }</span> : children }
      { icon && iconAlignment === 'right' && <Icon name={icon} className="u-icon-right" /> }
    </button>
  );

}

export default Button;