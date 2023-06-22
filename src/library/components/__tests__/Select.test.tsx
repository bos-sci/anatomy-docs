// TODO: ADS-606 Add default Radio group tests

import { render, screen } from '@testing-library/react';
import Select from '../Select';
import Option from '../Option';

describe('Select component', () => {
  it('Renders correctly with label and option props', () => {
    render(
      <Select label="Select">
        <Option value="" disabled selected />

        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    );
    expect(screen.getByLabelText('Select')).toBeInTheDocument();
    expect(screen.getByLabelText('Select')).toHaveClass('bsds-input-text-input-select-control');
  });

  it('Renders correctly with helpText prop', () => {
    render(
      <Select label="Select" helpText="Help text">
        <Option value="" disabled selected />

        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    );
    expect(screen.getByText('Help text')).toBeInTheDocument();
  });

  it('Renders correctly with errorText & forceValidation prop', () => {
    render(
      <Select label="Select" forceValidation required>
        <Option value="" disabled selected />

        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    );
    expect(screen.getByText('This is an example of an error message for a required form control.')).toBeInTheDocument();
  });
});
