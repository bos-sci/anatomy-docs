import { ReactElement, useState, useEffect, cloneElement, useId } from 'react';
import HeadingElement from "./Heading";
import Link from './Link';
import { Props as TagProps } from "./Tag";
import { Props as ImageProps } from "./Image";

interface Props {
  tag: ReactElement< TagProps >,
  texts: {
    title: string,
    description: string,
  }
  linkTo: string,
  headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6",
  variant?: "ghost" | "border-light" | "border-ghost",
  image?: ReactElement< ImageProps >,
  imageAlt?: string,
  gradientBrand?: boolean,
  dropShadow?: boolean
}

const ProductCard = (props: Props): JSX.Element => {
  const { tag, texts, headingLevel, linkTo, variant, image, imageAlt} = props;

  const [clonedImage, setClonedImage] = useState<ReactElement>();
  const [clonedTag, setClonedTag] = useState<ReactElement>();

  const productNameId = useId();

  let cardStyles = {
    classes: "",
    titleLinkClasses: "",
    linkClasses: ""
  }

  const defaultStyle = {
    classes: "bsds-card",
    titleLinkClasses: "bsds-link-subtle",
    linkClasses: ""
  }

  const ghostStyle = {
    classes: "bsds-card-ghost",
    titleLinkClasses: "bsds-link-ghost",
    linkClasses: "bsds-link-ghost"
  }

  const borderLightStyle = {
    classes: "bsds-card-border-light",
    titleLinkClasses: "bsds-link-subtle",
    linkClasses: ""
  }

  const borderGhostStyle = {
    classes: "bsds-card-border-ghost",
    titleLinkClasses: "bsds-link-ghost",
    linkClasses: "bsds-link-ghost"
  }

  switch(variant) {
    case "ghost":
      cardStyles = {...ghostStyle};
      break;
    case "border-light":
      cardStyles = {...borderLightStyle};
      break;
    case "border-ghost":
      cardStyles = {...borderGhostStyle};
      break;

    default:
      cardStyles = {...defaultStyle};
      break;
  }

  useEffect(() => {
    if(tag) {
      setClonedTag(cloneElement(tag as ReactElement, {
        isGhost: (variant === "ghost" || variant === "border-ghost"),
     }));
    }
  },[tag, variant])

  useEffect(() => {
    if(image) {
      setClonedImage(cloneElement(image as ReactElement, {
        ratio: "1:1",
        isDecorative: false,
        isGhost: (variant === "ghost" || variant === "border-ghost"),
     }));
    }
  },[image, imageAlt, linkTo, variant])

  const productCardContent = (
    <div className={"bsds-card-with-image"}>
      <div className={`"bsds-card-content" ${cardStyles.classes}`}>
      { image && clonedImage }
      { clonedTag }
      { headingLevel ? <HeadingElement headingLevel={headingLevel} className="bsds-card-title" id={"productTitle" + productNameId}>
        <Link href={linkTo} className={`${cardStyles.titleLinkClasses} ${"link-hitbox"}`}>
          { texts.title }
        </Link></HeadingElement> : <Link href={linkTo} className={`${"font-family-base-heavy"} ${cardStyles.titleLinkClasses} ${"link-hitbox"}`} id={"productTitle" + productNameId}>
          { texts.title }
        </Link>
      }
        <p className="bsds-card-description">{texts?.description}</p>
        </div>
    </div>
  )

  const productCardContentWrapper = (
    <div data-testid="bsdsProductCard">
      {productCardContent}
    </div>
  );

  return (
    productCardContentWrapper
  );
}

export default ProductCard;

