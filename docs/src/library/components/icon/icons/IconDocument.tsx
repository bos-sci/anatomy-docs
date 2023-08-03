/* eslint-disable react/no-unknown-property */

import { IconProps } from './iconTypes';

const IconDocument = (props: IconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={`${props.className}`}
      x="0px"
      y="0px"
      viewBox="0 0 64 64"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="14.44"
          y1="22.6"
          x2="47.63"
          y2="45.84"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#3485fe" />
          <stop offset="1" stop-color="#b3f" />
        </linearGradient>
      </defs>
      <g>
        <path d="M56.09,11.41L45.17,.85C44.61,.3,43.87,0,43.08,0H10.01C8.35,0,7,1.35,7,3V61c0,1.65,1.35,3,3.01,3H53.99c1.66,0,3.01-1.35,3.01-3V13.56c0-.81-.33-1.59-.91-2.15Zm-10.88-7.74l8.58,8.3h-7.73c-.47,0-.85-.38-.85-.85V3.67Zm8.78,58.33H10.01c-.55,0-1.01-.45-1.01-1V3c0-.55,.45-1,1.01-1H43.08s.09,.02,.13,.02V11.12c0,1.57,1.28,2.85,2.85,2.85h8.94V61c0,.55-.45,1-1.01,1Z" />
        <path
          d="M45.79,47.73H19.25c-.55,0-1-.45-1-1s.45-1,1-1h26.54c.55,0,1,.45,1,1s-.45,1-1,1Zm0-7.25H19.25c-.55,0-1-.45-1-1s.45-1,1-1h26.54c.55,0,1,.45,1,1s-.45,1-1,1Zm0-7.25H19.25c-.55,0-1-.45-1-1s.45-1,1-1h26.54c.55,0,1,.45,1,1s-.45,1-1,1Zm0-7.25H19.25c-.55,0-1-.45-1-1s.45-1,1-1h26.54c.55,0,1,.45,1,1s-.45,1-1,1Zm-9.03-7.5H19.25c-.55,0-1-.45-1-1s.45-1,1-1h17.51c.55,0,1,.45,1,1s-.45,1-1,1Z"
          fill="url(#linear-gradient)"
        />
      </g>
    </svg>
  );
};

export default IconDocument;
