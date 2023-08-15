/* eslint-disable jsx-a11y/prefer-tag-over-role */
import { IconProps } from './iconTypes';

const IconChevronDown = (props: IconProps): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`${props.className}`}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <path
        fill="currentColor"
        d="M8.3,14.17l-8-8a1,1,0,0,1,0-1.4l.93-.93a1,1,0,0,1,1.4,0L9,10.17l6.38-6.34a1,1,0,0,1,1.4,0l.93.93a1,1,0,0,1,0,1.4l-8,8a1,1,0,0,1-1.4,0Z"
      />
    </svg>
  );
};

export default IconChevronDown;
