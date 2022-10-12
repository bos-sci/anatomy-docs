import { VariantProps } from '../Preview';
import DefaultCard from "./DefaultCard";
import DefaultCardStyle from "./DefaultCardStyle";
import WithLinkedTitle from './WithLinkedTitle';
import WithLinkOrAction from './WithLinkOrAction';
import BorderStyleCard from './BorderStyleCard';
import WithBrandGradient from './WithBrandGradient';
import WithIcon from './WithIcon';
import WithTag from './WithTag';

const CardController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'withLinkedTitle':
      return <WithLinkedTitle />;
    case 'withLinkOrAction':
      return <WithLinkOrAction />;
    case 'withTag':
      return <WithTag />;
    case 'withDecorativeTreatment':
      return <WithBrandGradient />;
    case 'withIcon':
      return <WithIcon />;

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