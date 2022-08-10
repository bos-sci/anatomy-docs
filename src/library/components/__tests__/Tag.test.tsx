import { render, screen } from "@testing-library/react";
import Tag from "../Tag";

describe("Tag", () => {
  it("Renders default variant when no variant prop passed", () => {
    render(
      <Tag>Sample Tag!</Tag>
    );
    expect(screen.getByText("Sample Tag!")).toBeInTheDocument();
    expect(screen.getByText("Sample Tag!")).toHaveClass("bsds-tag");
  });

  it("Renders ghost variant", () => {
    render(<Tag variant="ghost">Variant Tag!</Tag>);

    expect(screen.getByText("Variant Tag!")).toBeInTheDocument();
    expect(screen.getByText("Variant Tag!")).toHaveClass("bsds-tag-ghost");
  });

  it("Renders accent variation", () => {
    render(
      <Tag variant="accent">Sample Tag!</Tag>
    );
    expect(screen.getByText("Sample Tag!")).toBeInTheDocument();
    expect(screen.getByText("Sample Tag!")).toHaveClass("bsds-tag-accent");
  });

  it("Renders accent-ghost variation", () => {
    render(
      <Tag variant="accent-ghost">Sample Tag!</Tag>
    );

    expect(screen.getByText("Sample Tag!")).toBeInTheDocument();
    expect(screen.getByText("Sample Tag!")).toHaveClass("bsds-tag-accent-ghost");
  });

  it("Renders assertive variation", () => {
    render(
      <Tag variant="assertive">
        Variant Tag!
      </Tag>
    );

    expect(screen.getByText("Variant Tag!")).toBeInTheDocument();
    expect(screen.getByText("Variant Tag!")).toHaveClass("bsds-tag-assertive");
  });

  it("Renders assertive-ghost variation", () => {
    render(
      <Tag variant="assertive-ghost">Variant Tag!</Tag>
    );

    expect(screen.getByText("Variant Tag!")).toBeInTheDocument();
    expect(screen.getByText("Variant Tag!")).toHaveClass("bsds-tag-assertive-ghost");
  });
});
