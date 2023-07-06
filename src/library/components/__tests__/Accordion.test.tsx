import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from 'library/components/Accordion';
import AccordionPanel from 'library/components/AccordionPanel';

describe('Accordion', () => {
  it('Should render with one accordion', async () => {
    render(
      <Accordion headingLevel="h2">
        <AccordionPanel heading="Accordion 1">Accordion panel 1</AccordionPanel>
      </Accordion>
    );

    const accordionTrigger = await screen.findByRole('button');
    expect(accordionTrigger).toBeInTheDocument();
  });

  it('Should render with multiple accordions', async () => {
    render(
      <Accordion headingLevel="h2">
        <AccordionPanel heading="Accordion 1">Accordion panel 1</AccordionPanel>
        <AccordionPanel heading="Accordion 2">Accordion panel 2</AccordionPanel>
        <AccordionPanel heading="Accordion 3">Accordion panel 3</AccordionPanel>
      </Accordion>
    );

    const accordionTrigger = await screen.findAllByRole('button');
    expect(accordionTrigger).toHaveLength(3);
  });

  it('Should have aria-expanded and show panel on click of accordion trigger', async () => {
    const user = userEvent.setup();

    render(
      <Accordion headingLevel="h2">
        <AccordionPanel heading="Accordion 1">Accordion panel 1</AccordionPanel>
      </Accordion>
    );

    const accordionTrigger = await screen.findByRole('button');
    await user.click(accordionTrigger);
    expect(screen.getByText('Accordion panel 1')).toBeInTheDocument();
    expect(accordionTrigger).toHaveAttribute('aria-expanded', 'true');
  });

  it("Should get class 'bsds-accordion-stoplight-green' when stoplightColor prop value is 'green'", async () => {
    render(
      <Accordion headingLevel="h2">
        <AccordionPanel heading="Accordion 1" stoplightColor="green">
          Accordion panel 1
        </AccordionPanel>
      </Accordion>
    );

    const stoplightIcon = await screen.findByRole('heading');
    expect(stoplightIcon).toHaveClass('bsds-accordion-stoplight-green');
  });
});
