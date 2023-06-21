import { VariantProps } from '../Preview';
import ContainedAccordion from './ContainedAccordion';
import DefaultAccordion from './DefaultAccordion';
import StoplightAccordion from './StoplightAccordion';

const AccordionController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // modifiers
    case 'accordionStoplight':
      return <StoplightAccordion />;

    // styles
    case 'accordionContained':
      return <ContainedAccordion />;

    default:
      return <DefaultAccordion />;
  }
};

export default AccordionController;
