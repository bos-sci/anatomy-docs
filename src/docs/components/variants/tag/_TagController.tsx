import { VariantProps } from '../Preview';
import DefaultTag from './DefaultTag';
import DefaultStyle from './DefaultStyle';
import AccentStyle from './AccentStyle';
import AssertiveStyle from './AssertiveStyle';
import FeaturedStyle from './FeaturedStyle';

const TagController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Styles
    case 'tagDefault':
      return <DefaultStyle />;
    case 'tagAccent':
      return <AccentStyle />;
    case 'tagAssertive':
      return <AssertiveStyle />;
    case 'tagFeatured':
      return <FeaturedStyle />;

    default:
      return <DefaultTag />;
  }
}

export default TagController;