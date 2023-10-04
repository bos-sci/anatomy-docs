import { VariantProps } from '../Preview';
import DefaultImage from './DefaultImage';
import ImageStyle1to1 from './ImageStyle1to1';
import ImageStyle4to3 from './ImageStyle4to3';
import ImageStyle16to9 from './ImageStyle16to9';
import ImageStyle21to9 from './ImageStyle21to9';
import WithCaption from './WithCaption';

const ImageController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    //Modifiers
    case 'withCaption':
      return <WithCaption />;
    //Styles
    case 'image1to1':
      return <ImageStyle1to1 />;
    case 'image4to3':
      return <ImageStyle4to3 />;
    case 'image16to9':
      return <ImageStyle16to9 />;
    case 'image21to9':
      return <ImageStyle21to9 />;

    default:
      return <DefaultImage />;
  }
};

export default ImageController;
