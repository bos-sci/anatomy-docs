import { ImgHTMLAttributes, useId } from "react";

interface BaseProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: Ratio,
  hasCaption?: boolean,
  isCaptionCentered?: boolean,
  isGhost?: boolean,
  texts?: {
    caption?: string
  }
}

type AltTextProps =
| {
  isDecorative: boolean,
  alt?: never
}
| {
  isDecorative?: never,
  alt: string
}

export type Ratio = "1:1" | "4:3" | "16:9" | "21:9" | "50:50";
export type Props = BaseProps & AltTextProps;

const Image = (props : Props): JSX.Element => {
  const {alt, ratio = "16:9", isDecorative, hasCaption, texts, className, ...imgAttrs} = props;

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
    case "50:50":
      ratioClasses = "-50-split";
  };

  let captionAlignment = "";

  if (props.isCaptionCentered && !props.isGhost) {
    captionAlignment = "-center";
  } else if (props.isCaptionCentered && props.isGhost) {
    captionAlignment = "-center-ghost";
  } else if (props.isGhost) {
    captionAlignment = "-ghost";
  }

  return (
    <>
      <img
        className={`bsds-image${ratioClasses}${className ? " " + className : ""}`}
        alt={isDecorative ? "" : alt}
        id={"image" + imageId}
        aria-describedby={hasCaption && texts?.caption ? `imageCaption${captionId}` : undefined}
        {...imgAttrs}
    />
      { hasCaption && texts?.caption &&
        <p className={`${"bsds-image-caption"}${captionAlignment}`} id={"imageCaption" + captionId}>
          {texts?.caption}
        </p>
      }
    </>
  )

}

export default Image;