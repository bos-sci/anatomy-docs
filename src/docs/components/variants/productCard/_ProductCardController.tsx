import { VariantProps } from '../Preview';
import BorderStyle from './BorderStyle';
import DefaultProductCard from './DefaultProductCard';
import DefaultStyle from './DefaultStyle';
import NonSemanticCardTitle from './NonSemanticCardTitle';
import SemanticCardTitle from './SemanticCardTitle';
import WithGradient from './WithGradient';
import WithShadow from './WithShadow';
import WithImage from './WithImage';
import WithTag from './WithTag';

const ProductCardController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'semanticCardTitle':
      return <SemanticCardTitle />;
    case 'nonSemanticCardTitle':
      return <NonSemanticCardTitle />;
    case 'productCardWithTag':
      return <WithTag />;
    case 'productCardWithShadow':
      return <WithShadow />;
    case 'productCardWithGradient':
      return <WithGradient />;
    case 'productCardWithImage':
      return <WithImage />;
    // Styles
    case 'defaultProductCardStyle':
      return <DefaultStyle />;
    case 'productCardBorder':
      return <BorderStyle />;

    default:
      return <DefaultProductCard />;
  }
};

export default ProductCardController;
