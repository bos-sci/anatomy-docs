/* eslint-disable jsx-a11y/prefer-tag-over-role */
import { IconProps } from './iconTypes';

const IconPlus = (props: IconProps): JSX.Element => {
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
        d="M16.71,7.07H10.93V1.29A1.29,1.29,0,0,0,9.64,0H8.36A1.29,1.29,0,0,0,7.07,1.29V7.07H1.29A1.29,1.29,0,0,0,0,8.36V9.64a1.29,1.29,0,0,0,1.29,1.29H7.07v5.78A1.29,1.29,0,0,0,8.36,18H9.64a1.29,1.29,0,0,0,1.29-1.29V10.93h5.78A1.29,1.29,0,0,0,18,9.64V8.36A1.29,1.29,0,0,0,16.71,7.07Z"
      />
    </svg>
  );
};

export default IconPlus;
