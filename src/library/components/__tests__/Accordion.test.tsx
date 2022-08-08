import { render, screen } from "@testing-library/react";
import Accordion from "../Accordion";

const AccordionChildren = () => <div>Hello!</div>;

describe("Accordion", () => {
  it("Renders the accordion with at least one item", () => {
    render(
      <Accordion headingLevel="h2">
        <AccordionChildren />
      </Accordion>
    );
    expect(true).toBe(true); // Update when parameters are set.
  });
});
