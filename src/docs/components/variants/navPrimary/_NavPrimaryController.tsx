import { VariantProps } from '../Preview';
import ComplexNavPrimary from './ComplexNavPrimary';
import IntermediateNavPrimary from './IntermediateNavPrimary';
import SimpleNavPrimary from './SimpleNavPrimary';

const NavPrimaryController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Styles
    case 'primaryNavigationSimple':
      return <SimpleNavPrimary />;
    case 'primaryNavigationIntermediate':
      return <IntermediateNavPrimary />;
    case 'primaryNavigationComplex':
      return <ComplexNavPrimary />;

    default:
      return <SimpleNavPrimary />;
  }
}

export default NavPrimaryController;