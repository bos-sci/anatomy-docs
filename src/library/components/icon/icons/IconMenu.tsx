import { IconProps } from './iconTypes';
import { useId } from 'react';

const IconMenu = (props: IconProps): JSX.Element => {
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
        d="M.64,4H17.36A.64.64,0,0,0,18,3.38V1.77a.65.65,0,0,0-.64-.65H.64A.65.65,0,0,0,0,1.77V3.38A.64.64,0,0,0,.64,4Zm0,6.43H17.36A.65.65,0,0,0,18,9.8V8.2a.65.65,0,0,0-.64-.65H.64A.65.65,0,0,0,0,8.2V9.8A.65.65,0,0,0,.64,10.45Zm0,6.43H17.36a.65.65,0,0,0,.64-.65V14.62a.64.64,0,0,0-.64-.64H.64a.64.64,0,0,0-.64.64v1.61A.65.65,0,0,0,.64,16.88Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconMenu;
