import { ReactNode, useState, useEffect } from "react";

export interface Props {
  children: ReactNode;
  variant?: 'accent' | 'assertive' | 'featured' | '';
  isGhost?: boolean;
}

const Tag = (props: Props): JSX.Element => {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    let variantClass = '';
    switch (props.variant) {
      case 'accent':
        variantClass = 'bsds-tag-accent';
        break;
      case 'assertive':
        variantClass = 'bsds-tag-assertive';
        break;
      case 'featured':
        variantClass = 'bsds-tag-featured';
        break;
      default:
        variantClass = 'bsds-tag';
        break;
    }

    if (props.isGhost) {
      variantClass ? variantClass += '-ghost' : variantClass += 'ghost';
    }

    setClasses(variantClass);
  }, [props.isGhost, props.variant]);

  return (
    <b className={classes}>{props.children}</b>
  );
};

export default Tag;
