import { VariantProps } from '../Preview';
import Default from './Default';
import Ghost from './Ghost';
import Subtle from './Subtle';

const LinkVariants = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Styles
    case 'linkGhost':
      return <Ghost />;
    case 'linkSubtle':
      return <Subtle />;

    default:
      return <Default />;
  }
}

export default LinkVariants;