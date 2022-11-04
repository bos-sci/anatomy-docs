import { VariantProps } from "../Preview";
import DefaultImage from "./DefaultImage";
import ImageStyle4x3 from "./ImageStyle4x3";
import ImageStyle16x9 from "./ImageStyle16x9";
import ImageStyle21x9 from "./ImageStyle16x9";
import WithCaption from "./WithCaption";

const ImageController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    //Modifiers
    case 'withCaption':
      return <WithCaption />
    //Styles
    case 'image1x1':
      return <DefaultImage />;
    case "image4x3":
      return <ImageStyle4x3 />;
    case "image16x9":
      return <ImageStyle16x9 />;
    case "image21x9":
      return <ImageStyle21x9 />;

    default:
      return <DefaultImage />;
  }
}

export default ImageController;