import { render } from "@testing-library/react";
import InputText from "../InputText";

describe("InputText", () => {
  it("Renders a blank input field by default", () => {
    const { getByLabelText } = render(<InputText label="Default Input" />);
    expect(getByLabelText("Default Input")).toBeInTheDocument();
  });
  it("renders an error node when 'forceValidation' is true and 'errorText' is present", () => {
    const { getByText } = render(
      <InputText label="Error Sample" errorText="Error Text" forceValidation />
    );
    expect(getByText("Error Text")).toBeInTheDocument();
  });
  it("does not render an error node if 'forceValidation' is false", () => {
    // use queryBy over getBy when testing for the absence of an element
    // https://testing-library.com/docs/guide-disappearance/#asserting-elements-are-not-present
    const { queryByText } = render(
      <InputText label="Error Sample" errorText="Error Text" />
    );
    expect(queryByText("Error Text")).not.toBeInTheDocument();
  });
});
