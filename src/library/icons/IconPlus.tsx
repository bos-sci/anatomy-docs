import { IconProps } from './iconTypes';

const IconPlus = (props: IconProps) => {
  return <svg focusable="false" className={`${props.className}`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path fill="currentColor" d="M16.65,7.09H10.91V1.35A1.27,1.27,0,0,0,9.64.07H8.36A1.27,1.27,0,0,0,7.09,1.35V7.09H1.35A1.27,1.27,0,0,0,.07,8.36V9.64a1.27,1.27,0,0,0,1.28,1.27H7.09v5.74a1.27,1.27,0,0,0,1.27,1.28H9.64a1.27,1.27,0,0,0,1.27-1.28V10.91h5.74a1.27,1.27,0,0,0,1.28-1.27V8.36A1.27,1.27,0,0,0,16.65,7.09Z"/></svg>;
}

export default IconPlus;