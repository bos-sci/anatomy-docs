import { IconProps } from './iconTypes';
import { useId } from 'react';

const IconChevronUp = (props: IconProps): JSX.Element => {
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
        id={`icon${useId()}`}
        d="M9.7,3.83l8,8a1,1,0,0,1,0,1.4l-.93.93a1,1,0,0,1-1.4,0L9,7.83,2.62,14.17a1,1,0,0,1-1.4,0l-.93-.93a1,1,0,0,1,0-1.4l8-8a1,1,0,0,1,1.4,0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconChevronUp;
