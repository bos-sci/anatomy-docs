import { VariantProps } from '../Preview';
import Default from './Default';
import Assertive from './Assertive';
import Ghost from './Ghost';
import Subtle from './Subtle';

const ButtonVariants = ({ variantId }: VariantProps) => {
  switch (variantId) {
    case 'buttonAssertive':
      return <Assertive />;
    case 'buttonGhost':
      return <Ghost />;
    case 'buttonSubtle':
      return <Subtle />;
    default:
      return <Default />;
  }
}

export default ButtonVariants;