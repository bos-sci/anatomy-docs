import Accordion from '../../../../library/components/Accordion';
import AccordionPanel from '../../../../library/components/AccordionPanel';
import Example from '../../../shared/components/Example';

const StoplightAccordion = (): JSX.Element => {
  return (
    <Example>
      <Accordion headingLevel="h4">
        <AccordionPanel heading="Stoplight accordion 1" stoplightColor="red">
          Accordion panel 1
        </AccordionPanel>
        <AccordionPanel heading="Stoplight accordion 2" stoplightColor="yellow">
          Accordion panel 2
        </AccordionPanel>
        <AccordionPanel heading="Stoplight accordion 3" stoplightColor="green">
          Accordion panel 3
        </AccordionPanel>
      </Accordion>
    </Example>
  );
}

export default StoplightAccordion;