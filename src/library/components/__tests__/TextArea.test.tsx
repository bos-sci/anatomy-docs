import { render, screen } from '@testing-library/react';
import Textarea from 'library/components/Textarea';

describe('Textarea', () => {
  it('Renders a blank textarea field by default', () => {
    render(<Textarea label="Default textarea" />);
    expect(screen.getByLabelText('Default textarea')).toBeInTheDocument();
  });
  it("renders an error node when 'forceValidation' is true and 'errorText' is present", () => {
    render(<Textarea label="Error Sample" errorText="Error Text" forceValidation />);
    expect(screen.getByText('Error Text')).toBeInTheDocument();
  });
  it("does not render an error node if 'forceValidation' is false", () => {
    // use queryBy over getBy when testing for the absence of an element
    // https://testing-library.com/docs/guide-disappearance/#asserting-elements-are-not-present
    render(<Textarea label="Error Sample" errorText="Error Text" />);
    expect(screen.queryByText('Error Text')).not.toBeInTheDocument();
  });
});
