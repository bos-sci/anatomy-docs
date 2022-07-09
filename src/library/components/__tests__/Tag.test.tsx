import { render } from "@testing-library/react";
import Tag from "../Tag";

describe("Tag", () => {
  it("Renders default variant when no variant prop passed", () => {
    const { getByText } = render(
      <Tag>Sample Tag!</Tag>
    );
    expect(getByText("Sample Tag!")).toBeInTheDocument();
    expect(getByText("Sample Tag!")).toHaveClass("ads-tag");
  });

  it("Renders ghost variant", () => {
    const { getByText } = render(<Tag variant="ghost">Variant Tag!</Tag>);

    expect(getByText("Variant Tag!")).toBeInTheDocument();
    expect(getByText("Variant Tag!")).toHaveClass("ads-tag-ghost");
  });

  it("Renders accent variation", () => {
    const { getByText } = render(
      <Tag variant="accent">Sample Tag!</Tag>
    );
    expect(getByText("Sample Tag!")).toBeInTheDocument();
    expect(getByText("Sample Tag!")).toHaveClass("ads-tag-accent");
  });

  it("Renders accent-ghost variation", () => {
    const { getByText } = render(
      <Tag variant="accent-ghost">Sample Tag!</Tag>
    );

    expect(getByText("Sample Tag!")).toBeInTheDocument();
    expect(getByText("Sample Tag!")).toHaveClass("ads-tag-accent-ghost");
  });

  it("Renders assertive variation", () => {
    const { getByText } = render(
      <Tag variant="assertive">
        Variant Tag!
      </Tag>
    );

    expect(getByText("Variant Tag!")).toBeInTheDocument();
    expect(getByText("Variant Tag!")).toHaveClass("ads-tag-assertive");
  });

  it("Renders assertive-ghost variation", () => {
    const { getByText } = render(
      <Tag variant="assertive-ghost">Variant Tag!</Tag>
    );

    expect(getByText("Variant Tag!")).toBeInTheDocument();
    expect(getByText("Variant Tag!")).toHaveClass("ads-tag-assertive-ghost");
  });
});
