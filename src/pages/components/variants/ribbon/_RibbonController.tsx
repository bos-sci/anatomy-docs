import { VariantProps } from '../Preview';
import RibbonConstrained from './RibbonConstrained';
import RibbonDefault from './RibbonDefault';
import RibbonInformational from './RibbonInformational';
import RibbonCenterAligned from './RibbonCenterAligned';
import RibbonShadow from './RibbonShadow';

const RibbonController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'ribbonCenterAligned':
      return <RibbonCenterAligned />;
    case 'ribbonShadow':
      return <RibbonShadow />;

    // Styles
    case 'ribbonConstrained':
      return <RibbonConstrained />;
    case 'ribbonInformational':
      return <RibbonInformational />;

    default:
      return <RibbonDefault />;
  }
};

export default RibbonController;
