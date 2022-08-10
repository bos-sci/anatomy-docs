import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("Renders a plain button when no props are passed", () => {
    // This is a negative test; we shouldn't be able to render empty buttons.
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("Renders default button when no props are supplied", () => {
    render(<Button>Plain Button!</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Plain Button!");
  });
  it("Renders the given variant when prop is supplied", () => {
    const { rerender } = render(
      <Button variant="ghost">Variant Button!</Button>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("bsds-button-ghost");

    rerender(<Button variant="assertive">Variant Button!</Button>);
    expect(screen.getByRole("button")).toHaveClass("bsds-button-assertive");

    rerender(<Button variant="subtle">Variant Button!</Button>);
    expect(screen.getByRole("button")).toHaveClass("bsds-button-subtle");
  });
});
