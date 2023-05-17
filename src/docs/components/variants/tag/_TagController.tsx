import { VariantProps } from '../Preview';
import DefaultTag from './DefaultTag';
import DefaultStyle from './DefaultStyle';
import AccentStyle from './AccentStyle';
import AssertiveStyle from './AssertiveStyle';
import FeaturedStyle from './FeaturedStyle';
import SubtleStyle from './SubtleStyle';

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
    case 'tagSubtle':
      return <SubtleStyle />;

    default:
      return <DefaultTag />;
  }
};

export default TagController;
