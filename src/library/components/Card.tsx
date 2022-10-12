import { ReactElement, cloneElement} from 'react';
import HeadingElement from "./Heading";
import {Props as TagProps} from "./Tag";
import Link from "./Link";
import Icon from "./icon/Icon";
import Tag from "./Tag";

interface PlainCardProps {
 texts: {
  cardTitle: string,
  cardDescription: string,
}
  variant?: string,
  headingLevel: "h2" | "h3" | "h4" | "h5" | "h6",
  tag?: ReactElement< TagProps >,
  tagStyle?: 'default' | 'assertive', 
  icon?: boolean, 
  iconName?: string,
}

type LinkedCardProps = 
  | {
    linkTitle?: boolean,
    linkHref?: string,
    actionLink? : never,
    linkActionText?: never
  } 
  | {
    linkTitle?: never,
    linkHref?: string,
    actionLink?: boolean,
    linkActionText?: string
  }

type HoverProps = 
  | {
    brandGradient?: boolean,
    dropShadow?: never
  }
  | {
    brandGradient?: never,
    dropShadow?: boolean
  }

type BaseProps = PlainCardProps & LinkedCardProps;
type AllProps = BaseProps & HoverProps;
  
const Card = (props : AllProps): JSX.Element => {
  const {texts, variant, headingLevel, tag, tagStyle = 'default', icon, iconName, linkTitle, linkHref, actionLink, linkActionText, brandGradient, dropShadow } = props;

  let cardStyles = {
    classes: '',
    titleLinkClasses: '',
    linkClasses: ''
  }

  const defaultStyle = {
    classes: 'bsds-card',
    titleLinkClasses: 'bsds-link-subtle',
    linkClasses: ''
  }

  const ghostStyle = {
    classes: 'bsds-card-ghost',
    titleLinkClasses: 'bsds-link-ghost',
    linkClasses: 'bsds-link-ghost'
  }

  const borderLightStyle = {
    classes: 'bsds-card-border-light',
    titleLinkClasses: 'bsds-link-subtle',
    linkClasses: ''
  }

  const borderGhostStyle = {
    classes: 'bsds-card-border-ghost',
    titleLinkClasses: 'bsds-link-ghost',
    linkClasses: 'bsds-link-ghost'
  }

  switch(variant) {
    case 'ghost':
      cardStyles = {...ghostStyle};
      break;
    case 'border-light':
      cardStyles = {...borderLightStyle};
      break;
    case 'border-ghost':
      cardStyles = {...borderGhostStyle};
      break;

    default: 
      cardStyles = {...defaultStyle};
      break;
  };

  let decorativeState = '';
  if(brandGradient && linkHref) {
    decorativeState = 'bsds-card-gradient';
    cardStyles = {...borderLightStyle};

  } else if(dropShadow && linkHref) {
    decorativeState = 'bsds-card-shadow';
    cardStyles = {...borderLightStyle};
  }

  let tagVariant = '';
  if(tag) {
    cloneElement(tag as ReactElement, {
      children: [],
      variant: props.variant
    })
    
    switch(tagStyle) {
      case 'default':
        if(variant !== 'ghost') {
          tagVariant = 'default'
        } else {
          tagVariant = 'ghost'
        }
        break;
      case 'assertive':
        if(variant !== 'ghost' && variant !== 'border-ghost') {
          tagVariant = 'assertive'
        } else {
          tagVariant = 'assertive-ghost'
        }
        break;
      
      default:
        tagVariant = 'default';
        break;
    }
  }

  const cardContent = ( 
    <div className='bsds-card-content'>
      { tag && <Tag variant={tagVariant}>{tag.props.children}</Tag> }
      { icon && <Icon name={`${iconName}`} className='bsds-icon-card'/> }
      <HeadingElement headingLevel={headingLevel} className='bsds-card-title'>
        { linkTitle ? <Link className={`${cardStyles.titleLinkClasses} ${'link-hitbox'}`} href={linkHref}>{texts.cardTitle}</Link> : <>{texts.cardTitle}</> }
      </HeadingElement> 
        <p className="bsds-card-description">{texts?.cardDescription}</p>
          { actionLink && <Link href={linkHref} className={`${cardStyles.linkClasses} ${'link-hitbox'}`}>{linkActionText}</Link> }
    </div>    
  ); 

    return (
      <div className={decorativeState && linkHref ? `${cardStyles.classes} ${decorativeState}` : cardStyles.classes}>
        {cardContent}
      </div>
    );
}

export default Card;