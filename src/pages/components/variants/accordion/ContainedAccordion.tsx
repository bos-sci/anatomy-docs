import { Accordion } from '@boston-scientific/anatomy-react';
import { AccordionPanel } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const ContainedAccordion = (): JSX.Element => {
  return (
    <Example>
      <Accordion headingLevel="h4" isContained>
        <AccordionPanel heading="Contained accordion 1">Accordion panel 1</AccordionPanel>
        <AccordionPanel heading="Contained accordion 2">Accordion panel 2</AccordionPanel>
        <AccordionPanel heading="Contained accordion 3">Accordion panel 3</AccordionPanel>
      </Accordion>
      <div className="bsds-mt-2x">
        <Accordion headingLevel="h4" isContained>
          <AccordionPanel heading="Contained stoplight accordion 1" stoplightColor="red">
            Accordion panel 1
          </AccordionPanel>
          <AccordionPanel heading="Contained stoplight accordion 2" stoplightColor="yellow">
            Accordion panel 2
          </AccordionPanel>
          <AccordionPanel heading="Contained stoplight accordion 3" stoplightColor="green">
            Accordion panel 3
          </AccordionPanel>
        </Accordion>
      </div>
    </Example>
  );
};

export default ContainedAccordion;
