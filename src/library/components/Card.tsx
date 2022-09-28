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
    linkTitle: boolean,
    linkHref?: string,
    actionLink? : never,
    linkActionText?: never
  } 
  | {
    linkTitle?: never,
    linkHref: string,
    actionLink : boolean,
    linkActionText: string
  }

type Props = PlainCardProps & LinkedCardProps;
  
const Card = (props : Props): JSX.Element => {
  const {texts, variant, headingLevel, linkTitle, linkHref, actionLink, linkActionText} = props;

  let classes = '';
  let linkClasses = '';
  switch(variant) {
    case 'ghost':
      classes = 'bsds-card-ghost';
      linkClasses = 'bsds-link-ghost';
      break;
    case 'border-light':
      classes = 'bsds-card-border-light';
      break;

    default: 
      classes = 'bsds-card';
      linkClasses = 'bsds-link';
      break;
  };

  const cardContent = ( 
    <div className="bsds-card-content">
      <HeadingElement headingLevel={headingLevel} className={linkTitle ? "bsds-card-title-link link-hitbox" : "bsds-card-title"}>{texts.cardTitle}</HeadingElement> 
        <p className="bsds-card-description">{texts?.cardDescription}</p>
          { actionLink ? (
            <Link href={linkHref} className={linkClasses}>{linkActionText}</Link>
          ) : null }
    </div>    
  ); 

    return (
      <div className={classes}>
      {cardContent}
      </div>
    );
}

export default Card;