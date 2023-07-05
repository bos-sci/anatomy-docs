import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from 'library/components/Button';
import Dropdown from 'library/components/Dropdown';
import DropdownGroupName from 'library/components/DropdownGroupName';

class ResizeObserver {
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
  disconnect() {
    // do nothing
  }
}
window.ResizeObserver = ResizeObserver;

describe('Dropdown', () => {
  it('Renders a standard dropdown when only triggerText prop is provided', () => {
    render(
      <Dropdown triggerText="Trigger menu text">
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </Dropdown>
    );

    expect(screen.getByText('Trigger menu text')).toBeInTheDocument();
  });

  it('Should open dropdown menu on click of trigger.', async () => {
    const user = userEvent.setup();

    render(
      <Dropdown triggerText="Trigger menu text">
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </Dropdown>
    );

    await waitFor(() => user.click(screen.getByText('Trigger menu text')));
    expect(screen.getByText('Dropdown item 1')).toBeVisible();
    expect(screen.getByText('Dropdown item 2')).toBeVisible();
    expect(screen.getByText('Dropdown item 3')).toBeVisible();
  });

  it("Should have aria-expanded='true' attribute on the trigger when menu is open.", async () => {
    const user = userEvent.setup();

    render(
      <Dropdown triggerText="Trigger menu text">
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </Dropdown>
    );

    const trigger = screen.getByText('Trigger menu text');

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await waitFor(() => user.click(trigger));
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('Renders a highlighted action in the dropdown menu when highlightedAction prop is provided.', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown triggerText="Trigger menu text" highlightedAction={<Button>Highlighted Action</Button>}>
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </Dropdown>
    );
    await waitFor(() => user.click(screen.getByText('Trigger menu text')));

    expect(screen.getByText('Highlighted Action')).toBeInTheDocument();
    expect(screen.getByText('Highlighted Action')).toBeVisible();
  });

  it('Renders a group name in the dropdown menu when DropdownGroupName child is provided.', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown triggerText="Trigger menu text">
        <Button>Dropdown item 1</Button>
        <DropdownGroupName>Group name 1</DropdownGroupName>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </Dropdown>
    );
    await waitFor(() => user.click(screen.getByText('Trigger menu text')));

    const groupName = screen.getByText('Group name 1');
    expect(groupName).toBeInTheDocument();
    expect(groupName).toBeVisible();
  });

  it('Should have aria-describedby attribute on menu items with a value that relates to the closest previous groupName.', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown triggerText="Trigger menu text">
        <Button>Dropdown item 1</Button>
        <DropdownGroupName>Group name 1</DropdownGroupName>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
        <DropdownGroupName>Group name 2</DropdownGroupName>
        <Button>Dropdown item 4</Button>
      </Dropdown>
    );
    await waitFor(() => user.click(screen.getByText('Trigger menu text')));

    expect(screen.getByText('Dropdown item 1')).not.toHaveAttribute('aria-describedby');

    const groupName1 = screen.getByText('Group name 1');
    const item2 = screen.getByText('Dropdown item 2');
    const item3 = screen.getByText('Dropdown item 3');
    expect(item2).toHaveAttribute('aria-describedby', groupName1.id);
    expect(item3).toHaveAttribute('aria-describedby', groupName1.id);

    const groupName2 = screen.getByText('Group name 2');
    const item4 = screen.getByText('Dropdown item 4');
    expect(item4).toHaveAttribute('aria-describedby', groupName2.id);
  });

  // Keyboard management tests
  it('Should focus first item when opening dropdown.', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown triggerText="Trigger menu text">
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </Dropdown>
    );

    await waitFor(() => user.click(screen.getByText('Trigger menu text')));
    expect(screen.getByText('Dropdown item 1')).toHaveFocus();
  });

  it('Focuses next item on press of down arrow, and loops back to top after last item.', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown triggerText="Trigger menu text">
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </Dropdown>
    );

    await waitFor(() => user.click(screen.getByText('Trigger menu text')));
    const item1 = screen.getByText('Dropdown item 1');
    const item2 = screen.getByText('Dropdown item 2');
    const item3 = screen.getByText('Dropdown item 3');

    await waitFor(() => user.keyboard('{ArrowDown}'));
    expect(item2).toHaveFocus();
    await waitFor(() => user.keyboard('{ArrowDown}'));
    expect(item3).toHaveFocus();
    await waitFor(() => user.keyboard('{ArrowDown}'));
    expect(item1).toHaveFocus();
  });

  it('Focuses previous item on press of up arrow, and loops back to bottom after first item.', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown triggerText="Trigger menu text">
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </Dropdown>
    );

    await waitFor(() => user.click(screen.getByText('Trigger menu text')));
    const item1 = screen.getByText('Dropdown item 1');
    const item2 = screen.getByText('Dropdown item 2');
    const item3 = screen.getByText('Dropdown item 3');

    await waitFor(() => user.keyboard('{ArrowUp}'));
    expect(item3).toHaveFocus();
    await waitFor(() => user.keyboard('{ArrowUp}'));
    expect(item2).toHaveFocus();
    await waitFor(() => user.keyboard('{ArrowUp}'));
    expect(item1).toHaveFocus();
    await waitFor(() => user.keyboard('{ArrowUp}'));
    expect(item3).toHaveFocus();
  });

  it('Does not focus group names.', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown triggerText="Trigger menu text">
        <Button>Dropdown item 1</Button>
        <DropdownGroupName>Group name 1</DropdownGroupName>
        <Button>Dropdown item 2</Button>
      </Dropdown>
    );

    await waitFor(() => user.click(screen.getByText('Trigger menu text')));
    const item1 = screen.getByText('Dropdown item 1');
    const item2 = screen.getByText('Dropdown item 2');

    await waitFor(() => user.keyboard('{ArrowDown}'));
    expect(item2).toHaveFocus();
    await waitFor(() => user.keyboard('{ArrowUp}'));
    expect(item1).toHaveFocus();
  });
});
