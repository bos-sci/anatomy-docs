import { render } from "@testing-library/react";
import Stoplight from "../Stoplight";

describe("Stoplight", () => {
  it("Renders alert variation", () => {
    const { getByText } = render(
      <Stoplight lightColor="red">Sample Stoplight!</Stoplight>
    );
    expect(getByText("Sample Stoplight!")).toBeInTheDocument();
    expect(getByText("Sample Stoplight!")).toHaveClass("ads-stoplight-red");
  });

  it("Renders warning variation", () => {
    const { getByText } = render(
      <Stoplight lightColor="yellow">Sample Stoplight!</Stoplight>
    );
    expect(getByText("Sample Stoplight!")).toBeInTheDocument();
    expect(getByText("Sample Stoplight!")).toHaveClass("ads-stoplight-yellow");
  });

  it("Renders success variation", () => {
    const { getByText } = render(
      <Stoplight lightColor="green">Sample Stoplight!</Stoplight>
    );

    expect(getByText("Sample Stoplight!")).toBeInTheDocument();
    expect(getByText("Sample Stoplight!")).toHaveClass("ads-stoplight-green");
  });

  it("Renders ghost variation when prop is present", () => {
    const { getByText } = render(
      <Stoplight lightColor="green" textColor="ghost">
        Variant Stoplight!
      </Stoplight>
    );

    expect(getByText("Variant Stoplight!")).toBeInTheDocument();
    expect(getByText("Variant Stoplight!")).toHaveClass("ads-stoplight-ghost");
  });

  it("Renders assertive size when prop is present", () => {
    const { getByText } = render(
      <Stoplight lightColor="green" textColor="ghost" size="assertive">
        Variant Stoplight!
      </Stoplight>
    );

    expect(getByText("Variant Stoplight!")).toBeInTheDocument();
    expect(getByText("Variant Stoplight!")).toHaveClass("body-assertive");
  });
});
