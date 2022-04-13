import Accordion from '../../../../library/components/Accordion';
import AccordionPanel from '../../../../library/components/AccordionPanel';
import Example from '../../../shared/components/Example';

const DefaultAccordion = (): JSX.Element => {
  return (
    <Example>
      <Accordion>
        <AccordionPanel accordionHeading="Accordion heading">
          Accordion panel 1
        </AccordionPanel>
        <AccordionPanel accordionHeading="Accordion heading">
          Accordion panel 2
        </AccordionPanel>
        <AccordionPanel accordionHeading="Accordion heading">
          Accordion panel 3
        </AccordionPanel>
      </Accordion>
    </Example>
  );
}

export default DefaultAccordion;