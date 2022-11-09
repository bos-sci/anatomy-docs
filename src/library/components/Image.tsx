import { useId } from "react";

export interface Props {
  src: string,
  ratio?: Ratio,
  isDecorative?: boolean,
  hasCaption?: boolean,
  isCaptionCentered?: boolean,
  isGhost?: boolean,
  texts?: {
    alt?: string,
    caption?: string
  }
}

export type Ratio = "1:1" | "4:3" | "16:9" | "21:9";

const Image = (props : Props): JSX.Element => {
  const {src, ratio = "16:9", isDecorative, hasCaption, texts} = props;

  const captionId = useId();
  const imageId = useId();

  let ratioClasses = "";

  switch(ratio) {
    case "1:1":
      ratioClasses = "-1to1";
      break;
    case "4:3":
      ratioClasses = "-4to3";
      break;
    case "16:9":
      ratioClasses = "-16to9";
      break;
    case "21:9":
      ratioClasses = "-21to9";
      break;
  };

  let captionAlignment = "";

  if (props.isCaptionCentered && !props.isGhost) {
    captionAlignment = "-center";
  } else if (props.isCaptionCentered && props.isGhost) {
    captionAlignment = "-center-ghost";
  } else if (props.isGhost) {
    captionAlignment = "-ghost";
  }

  const plainImage = (
    <img
      src={src}
      className={`bsds-image${ratioClasses}`}
      alt={isDecorative ? "" : texts?.alt}
      id={imageId}
    />
  )

  const captionedImage = (
    <figure className="bsds-figure-image" aria-labelledby={"imageCaption" + captionId}>
      { plainImage }
       <figcaption className={`${"bsds-figure-image-caption"}${captionAlignment}`} id={"imageCaption" + captionId}>
          {texts?.caption}
      </figcaption>
    </figure>
  )

  if (hasCaption && texts?.caption) {
    return captionedImage;
  };

  return (
    plainImage
  );
}

export default Image;