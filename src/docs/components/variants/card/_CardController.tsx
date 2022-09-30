import { VariantProps } from '../Preview';
import DefaultCard from "./DefaultCard";
import DefaultCardStyle from "./DefaultCardStyle";
import WithLinkedTitle from './WithLinkedTitle';
import WithLinkOrAction from './WithLinkOrAction';
import BorderStyleCard from './BorderStyleCard';
import WithBrandGradient from './WithBrandGradient';

const CardController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'withLinkedTitle':
      return <WithLinkedTitle />;
    case 'withLinkOrAction':
      return <WithLinkOrAction />;
    case 'withDecorativeTreatment':
      return <WithBrandGradient />;

    // Styles  
    case 'defaultCardStyle':
      return <DefaultCardStyle />;
    case 'borderStyleCard':
      return <BorderStyleCard />;
      
    default:
      return <DefaultCard />;
    }
}

export default CardController;