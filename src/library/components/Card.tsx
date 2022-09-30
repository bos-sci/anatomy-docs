import HeadingElement from "./Heading";
import Link from "./Link";

interface PlainCardProps {
 texts: {
  cardTitle: string,
  cardDescription: string,
}
  variant?: string,
  headingLevel: "h2" | "h3" | "h4" | "h5" | "h6"
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

type HoverCardProps = 
  | {
    brandGradient?: boolean,
    dropShadow?: never
  }
  | {
    brandGradient?: never,
    dropShadow?: boolean
  }

type Props = PlainCardProps & LinkedCardProps;
type AllProps = Props & HoverCardProps;
  
const Card = (props : AllProps): JSX.Element => {
  const {texts, variant, headingLevel, linkTitle, linkHref, actionLink, linkActionText, brandGradient, dropShadow } = props;

  let classes = '';
  let titleLinkClasses = '';
  let linkClasses = '';

  switch(variant) {
    case 'ghost':
      classes = 'bsds-card-ghost';
      titleLinkClasses = 'bsds-link-ghost';
      linkClasses = 'bsds-link-ghost';
      break;
    case 'border-light':
      classes = 'bsds-card-border-light';
      titleLinkClasses = 'bsds-link-subtle';
      linkClasses = 'bsds-link';
      break;
    case 'border-ghost':
      classes = 'bsds-card-border-ghost';
      titleLinkClasses = 'bsds-link-ghost';
      linkClasses = 'bsds-link-ghost';
      break;

    default: 
      classes = 'bsds-card';
      titleLinkClasses = 'bsds-link-subtle';
      linkClasses = 'bsds-link';
      break;
  };

  let decorativeState = '';
  if(brandGradient) {
    decorativeState = 'bsds-card-gradient';
  } else if(dropShadow) {
    decorativeState = 'bsds-card-shadow';
  }

  const cardContent = ( 
    <div className="bsds-card-content">
      <HeadingElement headingLevel={headingLevel} className={`${'bsds-card-title'} ${decorativeState}`}>
        {linkTitle ? <Link className={`${titleLinkClasses} ${'link-hitbox'}`} href={linkHref}>{texts.cardTitle}</Link> : <>{texts.cardTitle}</>}
        </HeadingElement> 
        <p className="bsds-card-description">{texts?.cardDescription}</p>
          { actionLink ? (
            <Link href={linkHref} className={`${linkClasses} ${decorativeState}`}>{linkActionText}</Link>
          ) : null }
    </div>    
  ); 

    return (
      <div className={`${classes}`}>
        {cardContent}
      </div>
    );
}

export default Card;