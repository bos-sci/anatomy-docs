import { IconProps } from './iconTypes';

const IconCardDemo = (props: IconProps): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`${props.className}`}
      data-testid="cardDemoIcon"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 384"
    >
      <path
        d="M464,0H48C21.5,0,0,21.5,0,48v288c0,26.5,21.5,48,48,48h416c26.5,0,48-21.5,48-48V48C512,21.5,490.5,0,464,0z M458,336H54c-3.3,0-6-2.7-6-6V54c0-3.3,2.7-6,6-6h404c3.3,0,6,2.7,6,6v276C464,333.3,461.3,336,458,336z M128,88c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40S150.1,88,128,88z M96,288h320v-80l-87.5-87.5c-4.7-4.7-12.3-4.7-17,0L192,240l-39.5-39.5c-4.7-4.7-12.3-4.7-17,0L96,240V288z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconCardDemo;
