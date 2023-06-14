/* eslint-disable jsx-a11y/prefer-tag-over-role */
import { IconProps } from './iconTypes';

const IconClose = (props: IconProps): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      className={`${props.className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      role="img"
      focusable="false"
    >
      <path
        d="M10.42,9L17.71,1.71c.39-.39,.39-1.03,0-1.42s-1.03-.39-1.42,0l-7.29,7.29L1.71,.29C1.32-.1,.69-.1,.29,.29S-.1,1.32,.29,1.71l7.29,7.29L.29,16.29c-.39,.39-.39,1.03,0,1.42s1.03,.39,1.42,0l7.29-7.29,7.29,7.29c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29c.39-.39,.39-1.03,0-1.42l-7.29-7.29Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconClose;
