import { render } from "@testing-library/react";
import Link from "../Link";

describe("Link", () => {
  it("Does not render when it's missing both 'to' and 'href' props", () => {

  });
  it("Renders default link", () => {
    const { getByRole } = render(<Link href="#">Plain Link!</Link>);
    expect(getByRole("link")).toBeInTheDocument();
    expect(getByRole("link")).toHaveTextContent("Plain Link!");
  });
  
  it("Renders the given variant when prop is supplied", () => {
    const { getByRole, rerender } = render(
      <Link variant="ghost" href="#">Variant Link!</Link>
    );
    expect(getByRole("link")).toBeInTheDocument();
    expect(getByRole("link")).toHaveClass("ads-link-ghost");

    rerender(<Link variant="subtle" href="#">Variant Link!</Link>);
    expect(getByRole("link")).toHaveClass("ads-link-subtle");

  });
});
