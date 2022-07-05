import { createRef } from "react";
import { render, fireEvent } from "@testing-library/react";
import Tab from "../Tab";

const defaultTabProps = {
  setSelectedTab: jest.fn(),
  index: 0,
  tabName: "Sample Tab",
  tabPanelId: "SampleTab",
  tabRef: createRef(),
};

describe("Tab", () => {
  it("Renders alert variation", () => {
    const { getByText } = render(<Tab {...defaultTabProps}>Sample Tab!</Tab>);
    expect(getByText("Sample Tab!")).toBeInTheDocument();
    expect(getByText("Sample Tab!")).toHaveClass("ads-stoplight-red");
  });

  it("Renders warning variation", () => {
    const { getByText } = render(<Tab lightColor="yellow">Sample Tab!</Tab>);
    expect(getByText("Sample Tab!")).toBeInTheDocument();
    expect(getByText("Sample Tab!")).toHaveClass("ads-stoplight-yellow");
  });

  it("Renders success variation", () => {
    const { getByText } = render(<Tab lightColor="green">Sample Tab!</Tab>);

    expect(getByText("Sample Tab!")).toBeInTheDocument();
    expect(getByText("Sample Tab!")).toHaveClass("ads-stoplight-green");
  });

  it("Renders ghost variation when prop is present", () => {
    const { getByText } = render(
      <Tab lightColor="green" textColor="ghost">
        Variant Tab!
      </Tab>
    );

    expect(getByText("Variant Tab!")).toBeInTheDocument();
    expect(getByText("Variant Tab!")).toHaveClass("ads-stoplight-ghost");
  });

  it("Renders assertive size when prop is present", () => {
    const { getByText } = render(
      <Tab lightColor="green" textColor="ghost" size="assertive">
        Variant Tab!
      </Tab>
    );

    expect(getByText("Variant Tab!")).toBeInTheDocument();
    expect(getByText("Variant Tab!")).toHaveClass("body-assertive");
  });
});
