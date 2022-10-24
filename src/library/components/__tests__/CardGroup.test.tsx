import { render, screen } from "@testing-library/react";
import CardGroup from "../CardGroup";

describe("CardGroup", () => {
  it("Renders a default card group when at least one child is provided", () => {
    render(
      <CardGroup>
        <div>Demo card</div>
      </CardGroup>
    );

    expect(screen.getByTestId("bsdsCardGroup")).toBeInTheDocument;
  });

  it("Adds class 'bsds-card-group-2up' to card group when '2up' cardLayout is selected", () => {
    render(
      <CardGroup cardLayout="2up">
        <div>Demo card</div>
      </CardGroup>
    );

    expect(screen.getByTestId("bsdsCardGroup")).toHaveClass("bsds-card-group-2up");
  });

  it("Adds class 'bsds-card-group-3up' to card group when '3up' cardLayout is selected", () => {
    render(
      <CardGroup cardLayout="3up">
        <div>Demo card</div>
      </CardGroup>
    );

    expect(screen.getByTestId("bsdsCardGroup")).toHaveClass("bsds-card-group-3up");
  });

  it("Adds class 'bsds-card-group-4up' to card group when '4up' cardLayout is selected", () => {
    render(
      <CardGroup cardLayout="4up">
        <div>Demo card</div>
      </CardGroup>
    );

    expect(screen.getByTestId("bsdsCardGroup")).toHaveClass("bsds-card-group-4up");
  });
})