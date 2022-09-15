import { VariantProps } from '../Preview';
import ComplexNavPrimary from './ComplexNavPrimary';
import ConstrainedNavPrimary from './ConstrainedNavPrimary';
import DefaultNavPrimary from './DefaultNavPrimary';
import IntermediateNavPrimary from './IntermediateNavPrimary';
import SimpleNavPrimary from './SimpleNavPrimary';

const NavPrimaryController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'primaryNavigationSimple':
      return <SimpleNavPrimary />;
    case 'primaryNavigationIntermediate':
      return <IntermediateNavPrimary />;
    case 'primaryNavigationComplex':
        return <ComplexNavPrimary />;

    // Styles
    case 'primaryNavigationDefault':
      return <DefaultNavPrimary />;
    case 'primaryNavigationConstrained':
      return <ConstrainedNavPrimary />;

    default:
      return <SimpleNavPrimary />;
  }
}

export default NavPrimaryController;