import { IconProps } from './iconTypes';

const IconClose = (props: IconProps): JSX.Element => {
  return <svg aria-hidden="true" className={`${props.className}`} focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M12.41,9l5.12-5.12a1.6,1.6,0,0,0,0-2.27L16.39.47a1.6,1.6,0,0,0-2.27,0L9,5.59,3.88.47a1.6,1.6,0,0,0-2.27,0L.47,1.61a1.6,1.6,0,0,0,0,2.27L5.59,9,.47,14.12a1.6,1.6,0,0,0,0,2.27l1.14,1.14a1.6,1.6,0,0,0,2.27,0L9,12.41l5.12,5.12a1.6,1.6,0,0,0,2.27,0l1.14-1.14a1.6,1.6,0,0,0,0-2.27Z"/></svg>;
}

export default IconClose;