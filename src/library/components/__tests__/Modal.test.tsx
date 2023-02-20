import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';
import Modal from '../Modal';
import BSCLogo from '../../../assets/images/logo-bsc-tagline.svg';

const positiveAction = <Button data-testid="positiveAction">Positive action</Button>;
const negativeAction = <Button data-testid="negativeAction">Negative action</Button>;

describe('Modal', () => {

  // Configurations

  it('Should render logo when provided', () => {
    render(<Modal logo={BSCLogo} logoAlt="bsc logo" title="Modal title" positiveAction={positiveAction}>Modal content</Modal>);
    expect(screen.getByAltText('bsc logo')).toBeInTheDocument();
  });

  it('Should render title when provided', () => {
    render(<Modal title="Modal title" positiveAction={positiveAction}>Modal content</Modal>);
    expect(screen.getByText('Modal title')).toBeInTheDocument();
  });

  it('Should render children when provided', () => {
    render(<Modal title="Modal title" positiveAction={positiveAction}>Modal content</Modal>);
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('Should not render close when hasClose is false', () => {
    render(<Modal title="Modal title" positiveAction={positiveAction} hasClose={false}>Modal content</Modal>);
    expect(screen.queryByTestId('modalCloseBtn')).not.toBeInTheDocument();
  });

  it('Should render close when hasClose is true (and by default), and add aria-label from closeAriaLabel', () => {
    render(<Modal title="Modal title" positiveAction={positiveAction} closeAriaLabel="close modal">Modal content</Modal>);
    expect(screen.getByTestId('modalCloseBtn')).toBeInTheDocument();
    expect(screen.getByTestId('modalCloseBtn')).toHaveAttribute('aria-label', 'close modal');
  });

  it('Should render positive action as assertive button style', () => {
    render(<Modal title="Modal title" positiveAction={positiveAction}>Modal content</Modal>);
    expect(screen.getByText('Positive action')).toBeInTheDocument();
    expect(screen.getByText('Positive action')).toHaveClass('bsds-button-assertive');
  });

  it('Should render negative action as subtle button style when close is present', () => {
    render(<Modal title="Modal title" positiveAction={positiveAction} negativeAction={negativeAction}>Modal content</Modal>);
    expect(screen.getByText('Negative action')).toBeInTheDocument();
    expect(screen.getByText('Negative action')).toHaveClass('bsds-button-subtle');
  });

  it('Should render negative action as default button style when close is not present', () => {
    render(<Modal title="Modal title" hasClose={false} positiveAction={positiveAction} negativeAction={negativeAction}>Modal content</Modal>);
    expect(screen.getByText('Negative action')).toBeInTheDocument();
    expect(screen.getByText('Negative action')).toHaveClass('bsds-button');
  });

  // Open and closing interactions
  // TODO: The can not be properly tested until this is resolved
  // https://github.com/jsdom/jsdom/issues/3294
  // Currently the modal can not be opened or closed in jest

  it('Should open on call of showModal', () => {

  });

  it('Should close on call of close', () => {

  });

  it('Should run onShowModal when opened', async () => {

  });

  it('Should run onClose when closed', async () => {

  });

  it('Should close modal on click outside of modal', () => {

  });

  // Keyboard interactions

  it('Should loop focus back to start on tab from last focusable element', async () => {
    const user = userEvent.setup();
    render(<Modal title="Modal title" positiveAction={positiveAction}>Modal content</Modal>);
    screen.getByTestId('positiveAction').focus();
    await user.tab();
    expect(screen.getByTestId('modalCloseBtn')).toHaveFocus();
  });

  it('Should loop focus to end on shift tab from first focusable element', async () => {
    const user = userEvent.setup();
    render(<Modal title="Modal title" positiveAction={positiveAction}>Modal content</Modal>);
    screen.getByTestId('modalCloseBtn').focus();
    await user.tab({shift: true});
    expect(screen.getByTestId('positiveAction')).toHaveFocus();
  });
});