import { useEffect, useState } from 'react';

interface Props {
  imageSrc: string,
  imageRatio?: "1x1" | "4x3" | "16x9" | "21x9",
  isDecorative?: boolean,
  isCaptioned?: boolean,
  centerCaption?: boolean,
  texts?: {
    imageAlt?: string,
    imageCaption?: string
  }
}

let imageCaptionId = 0;

const ImageElement = (props : Props): JSX.Element => {
  const {imageSrc, imageRatio = "1x1", isDecorative, isCaptioned, texts} = props;

  const [captionId, setCaptionId] = useState('');
  let captionAlignment = "";

  useEffect(() => {
    const captionIdNum = ++imageCaptionId;
    setCaptionId('imageCaption' + captionIdNum);
  }, []);

  if (props.centerCaption) {
    captionAlignment = "-center";
  } else {
    captionAlignment = "-left";
  }

  return (
    <figure className="bsds-image-fig" aria-labelledby={captionId ? captionId : ""}>
      <img src={imageSrc} className={imageRatio} alt={isDecorative ? "" : texts?.imageAlt} />
      { isCaptioned && <figcaption className={`${"bsds-image-fig-caption"}${captionAlignment}`} id={captionId ? captionId : ""}>
        {texts?.imageCaption}
      </figcaption> }
    </figure>
  );
}

export default ImageElement;