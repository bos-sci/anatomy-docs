import { VariantProps } from '../Preview';
import SimpleFooter from './SimpleFooter';
import IntermediateFooter from './IntermediateFooter';
import ComplexFooter from './IntermediateFooter';

const FooterController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'footerSimple':
      return <SimpleFooter />;
    case 'footerIntermediate':
      return <IntermediateFooter />;
    case 'footerComplex':
      return <ComplexFooter />;

    default:
      return <SimpleFooter />;
  }
};

export default FooterController;
