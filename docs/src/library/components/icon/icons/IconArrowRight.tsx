/* eslint-disable jsx-a11y/prefer-tag-over-role */
import { IconProps } from './iconTypes';

const IconArrowRight = (props: IconProps): JSX.Element => {
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
        d="M17.71,8.29L13.4,3.98c-.39-.39-1.03-.39-1.42,0s-.39,1.03,0,1.42l2.59,2.59H1C.45,7.99,0,8.44,0,9s.45,1,1,1H14.57l-2.59,2.59c-.39,.39-.39,1.03,0,1.42,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29l4.31-4.31c.39-.39,.39-1.03,0-1.42Z"
      />
    </svg>
  );
};

export default IconArrowRight;
