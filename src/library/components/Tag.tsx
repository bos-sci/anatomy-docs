import { ReactNode, useState, useEffect } from 'react';

export interface Props {
  children: ReactNode;
  variant?: 'accent' | 'assertive' | 'featured' | 'subtle' | '';
  isGhost?: boolean;
  texts?: {
    featuredTag?: string;
  };
}

const Tag = (props: Props): JSX.Element => {
  const [classes, setClasses] = useState('');
  const [featureTag, setFeatureTag] = useState<ReactNode>();

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
      case 'subtle':
        variantClass = 'bsds-tag-subtle';
        break;

      default:
        variantClass = 'bsds-tag';
        break;
    }

    if (props.isGhost) {
      variantClass ? (variantClass += '-ghost') : (variantClass += 'ghost');
    }

    setClasses(variantClass);
  }, [props.isGhost, props.variant]);

  useEffect(() => {
    if (props.variant !== 'featured') {
      setFeatureTag(props.children);
    } else {
      setFeatureTag(props.texts?.featuredTag || 'Featured');
    }
  }, [props.variant, props.children, props.texts?.featuredTag]);

  return <b className={classes}>{featureTag}</b>;
};

export default Tag;
