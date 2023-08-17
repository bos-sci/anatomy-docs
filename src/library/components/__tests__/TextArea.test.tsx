import { render, screen } from '@testing-library/react';
import TextArea from 'library/components/TextArea';

describe('TextArea', () => {
  it('Renders a blank input field by default', () => {
    render(<TextArea label="Default Input" />);
    expect(screen.getByLabelText('Default Input')).toBeInTheDocument();
  });
  it("renders an error node when 'forceValidation' is true and 'errorText' is present", () => {
    render(<TextArea label="Error Sample" errorText="Error Text" forceValidation />);
    expect(screen.getByText('Error Text')).toBeInTheDocument();
  });
  it("does not render an error node if 'forceValidation' is false", () => {
    // use queryBy over getBy when testing for the absence of an element
    // https://testing-library.com/docs/guide-disappearance/#asserting-elements-are-not-present
    render(<TextArea label="Error Sample" errorText="Error Text" />);
    expect(screen.queryByText('Error Text')).not.toBeInTheDocument();
  });
});
