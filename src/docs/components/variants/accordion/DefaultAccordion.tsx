import Accordion from '../../../../library/components/Accordion';
import AccordionPanel from '../../../../library/components/AccordionPanel';
import Example from '../../../shared/components/Example';

const DefaultAccordion = (): JSX.Element => {
  return (
    <Example>
      <Accordion headingLevel="h2">
        <AccordionPanel heading="Accordion 1">
          Accordion panel 1
        </AccordionPanel>
        <AccordionPanel heading="Accordion 2">
          Accordion panel 2
        </AccordionPanel>
        <AccordionPanel heading="Accordion 3">
          Accordion panel 3
        </AccordionPanel>
      </Accordion>
    </Example>
  );
}

export default DefaultAccordion;