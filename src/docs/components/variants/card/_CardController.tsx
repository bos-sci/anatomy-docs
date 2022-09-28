import { VariantProps } from '../Preview';
import DefaultCard from "./DefaultCard";
import WithLinkedTitle from './WithLinkedTitle';
import WithLinkOrAction from './WithLinkOrAction';

const CardController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'withLinkedTitle':
      return <WithLinkedTitle />;
    case 'withLinkOrAction':
      return <WithLinkOrAction />;

    // Styles  
    case 'defaultCard':
      return <DefaultCard />;
      
    default:
      return <DefaultCard />;
    }
}

export default CardController;