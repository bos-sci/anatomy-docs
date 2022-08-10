import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: string;
}

const Tag = (props: Props): JSX.Element => {
  const { variant } = props;

  let classes = '';
  switch (variant) {
    case 'accent':
      classes = 'bsds-tag-accent'
      break;
    case 'accent-ghost':
      classes = 'bsds-tag-accent-ghost'
      break;
    case 'assertive':
      classes = 'bsds-tag-assertive'
      break;
    case 'assertive-ghost':
      classes = 'bsds-tag-assertive-ghost'
      break;
    case 'ghost':
      classes = 'bsds-tag-ghost'
      break;
    default:
      classes = 'bsds-tag';
      break;
  }

  return (
    <p className={classes}>{props.children}</p>
  );
};

export default Tag;
