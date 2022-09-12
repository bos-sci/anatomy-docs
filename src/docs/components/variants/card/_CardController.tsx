import { VariantProps } from '../Preview';
import DefaultCard from "./DefaultCard";

const CardController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    case 'defaultCard':
      return <DefaultCard />;
      
    default:
      return <DefaultCard />;
    }
}

export default CardController;