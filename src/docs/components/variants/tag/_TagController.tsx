import { VariantProps } from '../Preview';
import DefaultTag from './DefaultTag';
import DefaultStyle from './DefaultStyle';
import AccentStyle from './AccentStyle';
import AssertiveStyle from './AssertiveStyle';

const TagController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Styles
    case 'tagDefault':
      return <DefaultStyle />;
    case 'tagAccent':
      return <AccentStyle />;
    case 'tagAssertive':
      return <AssertiveStyle />;

    default:
      return <DefaultTag />;
  }
}

export default TagController;