import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormEvent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Search, { SearchResult } from '../Search';

const searchResults: SearchResult[] = [
  {
    text: 'Breadcrumbs',
    to: '/breadcrumbs'
  },
  {
    text: 'Breadcrumbs2',
    to: '/breadcrumbs2'
  },
  {
    text: 'Buttons',
    to: '/buttons'
  }
];

describe('Search', () => {
  it('Should render an input and search button by default', () => {
    render(
      <Router>
        <Search label="Search" />
      </Router>
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByText('Search')[1]).toBeInTheDocument();
  });

  it('Should render clear button only when there is a value', () => {
    const { rerender } = render(
      <Router>
        <Search label="Search" />
      </Router>
    );

    expect(screen.getAllByRole('button')).toHaveLength(1);
    rerender(
      <Router>
        <Search label="Search" value="test" />
      </Router>
    );
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('Should clear input value on press of clear button', async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Search label="Search" value="test" />
      </Router>
    );
    const input = screen.getByRole('combobox');
    const clearBtn = screen.getAllByRole('button').find((button) => button.textContent !== 'Search');

    expect(input).toHaveValue('test');
    await user.click(clearBtn!);
    expect(input).toHaveValue('');
  });

  it('Should set search button disabled to true when input has no value, and false when the input has a value', () => {
    const { rerender } = render(
      <Router>
        <Search label="Search" />
      </Router>
    );
    const searchBtn = screen.getByRole('button');

    expect(searchBtn).toHaveAttribute('disabled');
    rerender(
      <Router>
        <Search label="Search" value="test" />
      </Router>
    );
    expect(searchBtn).not.toHaveAttribute('disabled');
  });

  it('Should run onFormSubmit function on press of search button', async () => {
    const onFormSubmit = jest.fn((e: FormEvent<HTMLFormElement>) => e.preventDefault());
    const user = userEvent.setup();
    render(
      <Router>
        <Search label="Search" value="test" onFormSubmit={onFormSubmit} />
      </Router>
    );

    const searchBtn = screen.getAllByText('Search')[1];
    await user.click(searchBtn);
    expect(onFormSubmit).toBeCalled();
  });

  it('Should run onChange function on change of input value', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(
      <Router>
        <Search label="Search" onChange={onChange} />
      </Router>
    );
    screen.getByRole('combobox').focus();
    await user.keyboard('x');
    expect(onChange).toBeCalled();
  });

  it('Should open autocomplete panel when typing unless hasAutoComplete is false', async () => {
    const user = userEvent.setup();
    const { rerender } = render(
      <Router>
        <Search label="Search" searchResults={searchResults} />
      </Router>
    );
    screen.getByRole('combobox').focus();
    await user.keyboard('bread');
    expect(screen.getByRole('list')).toBeInTheDocument();

    await rerender(
      <Router>
        <Search label="Search" searchResults={searchResults} hasAutocomplete={false} />
      </Router>
    );
    screen.getByRole('searchbox').focus();
    await user.keyboard('bread');
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('Should change aria-activedescendant value to id of first result on press of down arrow', async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Search label="Search" searchResults={searchResults} />
      </Router>
    );
    const searchBox = screen.getByRole('combobox');
    searchBox.focus();
    await user.keyboard('bread');
    await user.keyboard('{ArrowDown}');
    expect(searchBox.getAttribute('aria-activedescendant')).toMatch(/0$/);
  });

  it('Should change aria-activedescendant value to id of last result on press of up arrow', async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Search label="Search" searchResults={searchResults} />
      </Router>
    );
    const searchBox = screen.getByRole('combobox');
    searchBox.focus();
    await user.keyboard('bread');
    await user.keyboard('{ArrowUp}');
    expect(searchBox.getAttribute('aria-activedescendant')).toMatch(/2$/);
  });

  it('Should loop aria-activedescendant value to top result when pressing down arrow on the last result', async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Search label="Search" searchResults={searchResults} />
      </Router>
    );
    const searchBox = screen.getByRole('combobox');
    searchBox.focus();
    await user.keyboard('bread');
    await user.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}');
    expect(searchBox.getAttribute('aria-activedescendant')).toMatch(/0$/);
  });

  it('Should loop aria-activedescendant value to bottom result when pressing up arrow on the first result', async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Search label="Search" searchResults={searchResults} />
      </Router>
    );
    const searchBox = screen.getByRole('combobox');
    searchBox.focus();
    await user.keyboard('bread');
    await user.keyboard('{ArrowUp}{ArrowUp}{ArrowUp}{ArrowUp}');
    expect(searchBox.getAttribute('aria-activedescendant')).toMatch(/2$/);
  });
});
