// TODO: exclude demo "Accordion heading" h2s from tertiary nav

import Accordion from '../../../../library/components/Accordion';
import AccordionPanel from '../../../../library/components/AccordionPanel';
import Example from '../../../shared/components/Example';

const StoplightAccordion = (): JSX.Element => {
  return (
    <Example>
      <Accordion headingLevel="h2">
        <AccordionPanel heading="Accordion heading" stoplightColor="red">
          Accordion panel 1
        </AccordionPanel>
        <AccordionPanel heading="Accordion heading" stoplightColor="yellow">
          Accordion panel 2
        </AccordionPanel>
        <AccordionPanel heading="Accordion heading" stoplightColor="green">
          Accordion panel 3
        </AccordionPanel>
      </Accordion>
    </Example>
  );
}

export default StoplightAccordion;