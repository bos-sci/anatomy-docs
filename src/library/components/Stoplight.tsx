import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  lightColor: 'red' | 'yellow' | 'green';
  textColor?: 'ghost';
  size?: 'assertive' | 'subtle';
}

const Stoplight = ({ children, lightColor, textColor, size }: Props): JSX.Element => {

  let lightColorClasses = '';
  switch (lightColor) {
    case 'red':
      lightColorClasses = 'lib-stoplight-red'
      break;
    case 'yellow':
      lightColorClasses = 'lib-stoplight-yellow'
      break;
    case 'green':
      lightColorClasses = 'lib-stoplight-green'
      break;
  }

  let sizeClasses = '';
  switch (size) {
    case 'assertive':
      sizeClasses = ' body-assertive'
      break;
    case 'subtle':
      sizeClasses = ' body-subtle'
      break;
  }

  let textColorClasses = '';
  switch (textColor) {
    case 'ghost':
      textColorClasses = ' lib-stoplight-ghost'
      break;
  }

  return (
    <p className={lightColorClasses + textColorClasses + sizeClasses}>
      {children}
    </p>
  );
}

export default Stoplight;