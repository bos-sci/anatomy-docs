import { ReactElement, cloneElement, useState, useEffect } from "react";
import HeadingElement from "./Heading";
import { Props as TagProps } from "./Tag";
import Link from "./Link";
import Icon from "./icon/Icon";

interface PlainCardProps {
  texts: {
    cardTitle: string,
    cardDescription: string,
  }
  variant?: string,
  headingLevel: "h2" | "h3" | "h4" | "h5" | "h6",
  tag?: ReactElement< TagProps >,
  tagStyle?: "default" | "assertive", //TO DO: add "featured" tag style
  icon?: boolean, 
  iconName?: string,
}

type LinkedCardProps = 
  | {
    linkTitle?: boolean,
    linkHref?: string,
    actionLink?: never,
    actionLinkText?: never
  } 
  | {
    linkTitle?: never,
    linkHref?: string,
    actionLink?: boolean,
    actionLinkText?: string
  }

type HoverProps = 
  | {
    gradientBrand?: boolean,
    dropShadow?: never
  }
  | {
    gradientBrand?: never,
    dropShadow?: boolean
  }

type BaseProps = PlainCardProps & LinkedCardProps;
type Props = BaseProps & HoverProps;
  
const Card = (props : Props): JSX.Element => {
  const {texts, variant, headingLevel, tag, tagStyle = "default", icon, iconName, linkTitle, linkHref, actionLink, actionLinkText, gradientBrand, dropShadow } = props;

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
  };

  let decorativeState = "";
  if(gradientBrand && linkHref) {
    decorativeState = "bsds-card-gradient";
    cardStyles = {...borderLightStyle};

  } else if(dropShadow && linkHref) {
    decorativeState = "bsds-card-shadow";
    cardStyles = {...borderLightStyle};
  }
  
  let tagVariant = "";
  switch(tagStyle) {
    case "default":
      if(variant !== "ghost") {
        tagVariant = "default"
      } else {
        tagVariant = "ghost"
      }
      break;
    case "assertive":
      if(variant !== "ghost" && variant !== "border-ghost") {
        tagVariant = "assertive"
      } else {
        tagVariant = "assertive-ghost"
      }
      break;
    
    default:
      tagVariant = "default";
      break;
  }

  const [clonedTag, setClonedTag] = useState<ReactElement>();
  useEffect(() => {
    if(tag) {
        setClonedTag(cloneElement(tag as ReactElement, {
        variant: tagVariant
      }));
    }
  }, [tag, tagVariant])

  const cardContent = ( 
    <div className="bsds-card-content">
      { clonedTag }
      { icon && <Icon name={`${iconName}`} className="bsds-icon-8x"/> }
        <HeadingElement headingLevel={headingLevel} className="bsds-card-title">
          { linkTitle ? 
            <Link href={linkHref} className={`${cardStyles.titleLinkClasses} ${"link-hitbox"}`}>
              {texts.cardTitle}
            </Link> : 
            <>{texts.cardTitle}</> 
          }
        </HeadingElement> 
          <p className="bsds-card-description">{texts?.cardDescription}</p>
            { actionLink && 
              <Link href={linkHref} className={`${cardStyles.linkClasses} ${"link-hitbox"}`}>
                {actionLinkText}
              </Link> }
    </div>    
  ); 

    return (
      <div className={decorativeState && linkHref ? `${cardStyles.classes} ${decorativeState}` : cardStyles.classes}>
        {cardContent}
      </div>
    );
}

export default Card;