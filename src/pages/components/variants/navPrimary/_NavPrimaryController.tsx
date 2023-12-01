import { VariantProps } from '../Preview';
import CobrandedNavPrimary from './CobrandedNavPrimary';
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
    case 'primaryNavigationCobranded':
      return <CobrandedNavPrimary />;

    // Styles
    case 'primaryNavigationDefault':
      return <DefaultNavPrimary />;
    case 'primaryNavigationConstrained':
      return <ConstrainedNavPrimary />;

    default:
      return <SimpleNavPrimary />;
  }
};

export default NavPrimaryController;
