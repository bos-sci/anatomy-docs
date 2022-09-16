import Link from "./Link";

interface Props {
 texts: {
  cardTitle: string,
  linkTitle?: boolean,
  linkHref?: string,
  cardDescription: string,
 }
 linked?: {
  actionLink?: boolean,
  linkActionText?: string,
 }
 image?: {
  hasImage?: boolean,
  imageSrc?: string,
  imageAlt?: string,
 }
}
  
const Card = ({texts, linked, image}: Props): JSX.Element => {
  const cardContent = (
    <div className="bsds-card">
      { image?.hasImage ? (
      <img
      className="bsds-card-image"
      src={image?.imageSrc}
      alt={image?.imageAlt || ''}
      />
      ) : null }
      <div className="bsds-card-body">
        <h4 className={texts.linkTitle ? "bsds-card-title-link" : "bsds-card-title"}>{texts.cardTitle}</h4>
          <p className="bsds-card-text-content">{texts?.cardDescription}</p>
            { linked?.actionLink ? (
              <Link href={texts.linkHref}>{linked?.linkActionText}</Link>
            ) : null }
      </div>
    </div>
  ); 

    return (
      <div> 
      { texts.linkTitle ? ( 
      <Link className="bsds-linked-card" href={texts.linkHref}>{cardContent}</Link> 
      ) : <div>{cardContent}</div> }
      </div>
    )
}

export default Card;