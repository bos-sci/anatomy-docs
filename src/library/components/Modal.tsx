import { ForwardedRef, forwardRef, MutableRefObject, PointerEvent, ReactNode, useEffect, useId, useRef } from 'react';
import Button from './Button';

interface Props {
  hasClose?: boolean;
  logo?: string;
  logoAlt?: string;
  closeAriaLabel?: string;
  title: string;
  actions: ReactNode;
  children: ReactNode;
}

const Modal = forwardRef(({hasClose = true, logo, logoAlt, closeAriaLabel = 'Close modal', title, actions, children}: Props, ref: ForwardedRef<HTMLDialogElement>): JSX.Element => {

  const dialogId = useId();

  const dialogRef = useRef<HTMLDialogElement>(null);

  const clickOut = (e: PointerEvent) => {
    const dialogBox = dialogRef.current?.getBoundingClientRect();
    if (dialogBox) {
      const isInDialog = (
        dialogBox.top <= e.clientY
        && e.clientY <= dialogBox.top + dialogBox.height
        && dialogBox.left <= e.clientX
        && e.clientX <= dialogBox.left + dialogBox.width
      );
      if (!isInDialog) {
        dialogRef.current?.close();
      }
    }
  }

  const handleFocus = (e: KeyboardEvent) => {
    if (dialogRef.current) {
      const focusableElements = [...dialogRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')] as HTMLElement[];
      if (e.key === 'Tab') {
        if (document.activeElement === focusableElements.at(-1) && !e.shiftKey) {
          focusableElements[0].focus();
          e.preventDefault();
        } else if (document.activeElement === focusableElements[0] && e.shiftKey) {
          focusableElements.at(-1)?.focus();
          e.preventDefault();
        }
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleFocus);
    return () => {
      document.removeEventListener('keydown', handleFocus);
    }
  }, []);

  return (
    // Disabling as adding role="dialog" is required for some screen readers to announce properly
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <dialog
      ref={node => {
        if (node) {
          (dialogRef as MutableRefObject<HTMLDialogElement>).current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            (ref as MutableRefObject<HTMLDialogElement>).current = node;
          }
        }
      }}
      role="dialog"
      id={dialogId}
      className="bsds-modal"
      aria-labelledby={dialogId + '-heading'}
      aria-describedby={dialogId + '-body'}
      aria-modal="true"
      onPointerUp={clickOut}
    >
      <div className="bsds-modal-header">
        { logo && <img src={logo} alt={logoAlt} className="bsds-modal-logo" /> }
        <h2 id={dialogId + '-heading'} className="bsds-modal-title">{ title }</h2>
        { hasClose &&
          <Button
            variant="subtle"
            icon="close"
            className="bsds-modal-close"
            aria-label={closeAriaLabel}
            onClick={() => dialogRef.current?.close()}
          />
        }
      </div>
      <div id={dialogId + '-body'} className="bsds-modal-body">
        { children }
      </div>
      <div className="bsds-modal-footer">
        { actions }
      </div>
    </dialog>
  );
});

export default Modal;