import HeadingElement from "./Heading";
import Link from "./Link";
import Icon from "./icon/Icon";

interface PlainCardProps {
 texts: {
  cardTitle: string,
  cardDescription: string,
}
  variant?: string,
  headingLevel: "h2" | "h3" | "h4" | "h5" | "h6",
  icon?: boolean, 
  iconName?: string
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

type Props = PlainCardProps & LinkedCardProps;
type AllProps = Props & HoverProps;
  
const Card = (props : AllProps): JSX.Element => {
  const {texts, variant, headingLevel, icon, iconName, linkTitle, linkHref, actionLink, linkActionText, brandGradient, dropShadow } = props;

  let cardStyles = {
    classes: '',
    titleLinkClasses: '',
    linkClasses: ''
  }

  const defaultStyle = {
    classes: 'bsds-card',
    titleLinkClasses: 'bsds-link-subtle',
    linkClasses: 'bsds-link'
  }

  const ghostStyle = {
    classes: 'bsds-card-ghost',
    titleLinkClasses: 'bsds-link-ghost',
    linkClasses: 'bsds-link-ghost'
  }

  const borderLightStyle = {
    classes: 'bsds-card-border-light',
    titleLinkClasses: 'bsds-link-subtle',
    linkClasses: 'bsds-link'
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

  const cardContent = ( 
    <div className="bsds-card-content">
      {icon ? <Icon name={`${iconName}`} className='bsds-icon-card'/> : null}
      <HeadingElement headingLevel={headingLevel} className={`${'bsds-card-title'} ${decorativeState}`}>
        {linkTitle ? <Link className={`${cardStyles.titleLinkClasses} ${'link-hitbox'}`} href={linkHref}>{texts.cardTitle}</Link> : <>{texts.cardTitle}</>}
        </HeadingElement> 
        <p className="bsds-card-description">{texts?.cardDescription}</p>
          { actionLink ? (
            <Link href={linkHref} className={`${cardStyles.linkClasses} ${decorativeState}`}>{linkActionText}</Link>
          ) : null }
    </div>    
  ); 

    return (
      <div className={cardStyles.classes}>
        {cardContent}
      </div>
    );
}

export default Card;