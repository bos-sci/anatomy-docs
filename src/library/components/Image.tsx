import { useEffect, useState } from "react";

export interface Props {
  imageSrc: string,
  imageRatio?: "even-split" | "1x1" | "4x3" | "16x9" | "21x9",
  isDecorative?: boolean,
  isCaptioned?: boolean,
  centerCaption?: boolean,
  isGhost?: boolean,
  texts?: {
    imageAlt?: string,
    imageCaption?: string
  }
}

let imageElId = 0;
let imageCaptionId = 0;

const ImageElement = (props : Props): JSX.Element => {
  const {imageSrc, imageRatio = "16x9", isDecorative, isCaptioned, texts} = props;

  const [captionId, setCaptionId] = useState("");
  const [imageId, setImageId] = useState("")

  useEffect(() => {
    const imageIdNum = ++imageElId;
    const captionIdNum = ++imageCaptionId;
    setImageId("image" + imageIdNum);
    setCaptionId("imageCaption" + captionIdNum);
  }, []);

  let captionAlignment = "";

  if (props.centerCaption && !props.isGhost) {
    captionAlignment = "-center";
  } else if (props.centerCaption && props.isGhost) {
    captionAlignment = "-center-ghost";
  } else if (props.isGhost) {
    captionAlignment = "-left-ghost";
  } else {
    captionAlignment = "-left";
  }

  return (
    <figure className="bsds-image-fig" aria-labelledby={isCaptioned ? captionId : imageId}>
      <img src={imageSrc} className={`image-${imageRatio}`} alt={isDecorative ? "" : texts?.imageAlt} id={imageId} />
      { isCaptioned && <figcaption className={`${"bsds-image-fig-caption"}${captionAlignment}`} id={captionId ? captionId : ""}>
        {texts?.imageCaption}
      </figcaption> }
    </figure>
  );
}

export default ImageElement;