import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "../InputCheckbox";

describe("Checkbox Component", () => {
  it("Renders correctly with default props", () => {
    render(<Checkbox label="Test Checkbox" />);
    expect(screen.getByLabelText("Test Checkbox")).toBeInTheDocument();
  });

  it("Calls onChange when clicked", async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();

    render(<Checkbox label="Test Checkbox" onChange={onChange} />);
    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);

    expect(onChange).toBeCalled();
    expect(checkbox).toBeChecked();
  });

  it("Has error node on blur when required and not checked", async () => {
    render(<Checkbox label="Test Checkbox" required />);
    const checkbox = screen.getByRole("checkbox");
    await checkbox.focus();
    await checkbox.blur();
    const errorNode = screen.getByText("This is an example of an error message for a required form control.");

    expect(errorNode).toBeInTheDocument();
  });
});
