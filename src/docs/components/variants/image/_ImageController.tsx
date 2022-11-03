import { VariantProps } from "../Preview";
import DefaultImage from "./DefaultImage";

const ImageController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    //Styles
    case '1x1':
      return <DefaultImage />;

    default:
      return <DefaultImage />;
  }
}

export default ImageController;