import { VariantProps } from '../Preview';
import DefaultAccordion from './DefaultAccordion';
import StoplightAccordion from './StoplightAccordion';

const AccordionController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // modifiers
    case 'accordionStoplight':
      return <StoplightAccordion />;

    default:
      return <DefaultAccordion />;
  }
}

export default AccordionController;