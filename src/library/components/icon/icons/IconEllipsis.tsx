/* eslint-disable jsx-a11y/prefer-tag-over-role */
import { IconProps } from './iconTypes';

const IconEllipsis = (props: IconProps): JSX.Element => {
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
        d="M4.67,9c0,1.29-1.04,2.33-2.33,2.33s-2.33-1.05-2.33-2.33,1.04-2.33,2.33-2.33,2.33,1.05,2.33,2.33Zm6.67,0c0,1.29-1.05,2.33-2.33,2.33s-2.33-1.05-2.33-2.33,1.05-2.33,2.33-2.33,2.33,1.05,2.33,2.33Zm2,0c0-1.29,1.05-2.33,2.33-2.33s2.33,1.05,2.33,2.33-1.05,2.33-2.33,2.33-2.33-1.05-2.33-2.33Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconEllipsis;
