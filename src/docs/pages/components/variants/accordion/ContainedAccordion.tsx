import Accordion from 'library/components/Accordion';
import AccordionPanel from 'library/components/AccordionPanel';
import Example from 'docs/shared/components/Example';

const ContainedAccordion = (): JSX.Element => {
  return (
    <Example>
      <Accordion headingLevel="h4" isContained>
        <AccordionPanel heading="Contained accordion 1">Accordion panel 1</AccordionPanel>
        <AccordionPanel heading="Contained accordion 2">Accordion panel 2</AccordionPanel>
        <AccordionPanel heading="Contained accordion 3">Accordion panel 3</AccordionPanel>
      </Accordion>
    </Example>
  );
};

export default ContainedAccordion;
