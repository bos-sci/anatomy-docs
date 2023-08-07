import { render, screen } from '@testing-library/react';
import CardGroup from 'library/components/CardGroup';

describe('CardGroup', () => {
  it('Renders a default card group when at least one child is provided', () => {
    render(
      <CardGroup>
        <div>Demo card</div>
      </CardGroup>
    );

    expect(screen.getByTestId('bsdsCardGroup')).toBeInTheDocument();
  });

  it("Adds class 'bsds-card-group-two-up' to card group when '2up' cardLayout is selected", () => {
    render(
      <CardGroup cardLayout="twoUp">
        <div>Demo card</div>
      </CardGroup>
    );

    expect(screen.getByTestId('bsdsCardGroup')).toHaveClass('bsds-card-group-two-up');
  });

  it("Adds class 'bsds-card-group-three-up' to card group when '3up' cardLayout is selected", () => {
    render(
      <CardGroup cardLayout="threeUp">
        <div>Demo card</div>
      </CardGroup>
    );

    expect(screen.getByTestId('bsdsCardGroup')).toHaveClass('bsds-card-group-three-up');
  });

  it("Adds class 'bsds-card-group-four-up' to card group when '4up' cardLayout is selected", () => {
    render(
      <CardGroup cardLayout="fourUp">
        <div>Demo card</div>
      </CardGroup>
    );

    expect(screen.getByTestId('bsdsCardGroup')).toHaveClass('bsds-card-group-four-up');
  });
});
