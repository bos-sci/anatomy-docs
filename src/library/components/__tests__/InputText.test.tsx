import { render, screen } from "@testing-library/react";
import InputText from "../InputText";

describe("InputText", () => {
  it("Renders a blank input field by default", () => {
    render(<InputText label="Default Input" />);
    expect(screen.getByLabelText("Default Input")).toBeInTheDocument();
  });
  it("renders an error node when 'forceValidation' is true and 'errorText' is present", () => {
    render(
      <InputText label="Error Sample" errorText="Error Text" forceValidation />
    );
    expect(screen.getByText("Error Text")).toBeInTheDocument();
  });
  it("does not render an error node if 'forceValidation' is false", () => {
    // use queryBy over getBy when testing for the absence of an element
    // https://testing-library.com/docs/guide-disappearance/#asserting-elements-are-not-present
    render(<InputText label="Error Sample" errorText="Error Text" />);
    expect(screen.queryByText("Error Text")).not.toBeInTheDocument();
  });
});
