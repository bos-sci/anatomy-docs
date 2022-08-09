import { render, screen } from "@testing-library/react";
import Stoplight from "../Stoplight";

describe("Stoplight", () => {
  it("Renders alert variation", () => {
    render(<Stoplight lightColor="red">Sample Stoplight!</Stoplight>);
    expect(screen.getByText("Sample Stoplight!")).toBeInTheDocument();
    expect(screen.getByText("Sample Stoplight!")).toHaveClass(
      "ads-stoplight-red"
    );
  });

  it("Renders warning variation", () => {
    render(<Stoplight lightColor="yellow">Sample Stoplight!</Stoplight>);
    expect(screen.getByText("Sample Stoplight!")).toBeInTheDocument();
    expect(screen.getByText("Sample Stoplight!")).toHaveClass(
      "ads-stoplight-yellow"
    );
  });

  it("Renders success variation", () => {
    render(<Stoplight lightColor="green">Sample Stoplight!</Stoplight>);

    expect(screen.getByText("Sample Stoplight!")).toBeInTheDocument();
    expect(screen.getByText("Sample Stoplight!")).toHaveClass(
      "ads-stoplight-green"
    );
  });

  it("Renders ghost variation when prop is present", () => {
    render(
      <Stoplight lightColor="green" textColor="ghost">
        Variant Stoplight!
      </Stoplight>
    );

    expect(screen.getByText("Variant Stoplight!")).toBeInTheDocument();
    expect(screen.getByText("Variant Stoplight!")).toHaveClass(
      "ads-stoplight-ghost"
    );
  });

  it("Renders assertive size when prop is present", () => {
    render(
      <Stoplight lightColor="green" textColor="ghost" size="assertive">
        Variant Stoplight!
      </Stoplight>
    );

    expect(screen.getByText("Variant Stoplight!")).toBeInTheDocument();
    expect(screen.getByText("Variant Stoplight!")).toHaveClass(
      "body-assertive"
    );
  });
});
