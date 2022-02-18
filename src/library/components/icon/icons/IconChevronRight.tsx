import { IconProps } from './iconTypes';

const IconChevronRight = (props: IconProps): JSX.Element => {
  return <svg aria-hidden="true" focusable="false" className={`${props.className}`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path fill="currentColor" d="M14.17,9.7l-8,8a1,1,0,0,1-1.4,0l-.93-.93a1,1,0,0,1,0-1.4L10.17,9,3.83,2.62a1,1,0,0,1,0-1.4L4.76.29a1,1,0,0,1,1.4,0l8,8A1,1,0,0,1,14.17,9.7Z"/></svg>;
}

export default IconChevronRight;