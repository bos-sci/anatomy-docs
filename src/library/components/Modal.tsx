import { ForwardedRef, forwardRef, PointerEvent, ReactNode, useCallback, useEffect, useId, useImperativeHandle, useRef } from 'react';
import "wicg-inert";
import Button from './Button';

export interface ModalRef {
  showModal: () => void;
  close: () => void;
  isOpen: boolean;
}

interface Props {
  hasClose?: boolean;
  closeAriaLabel?: string;
  logo?: string;
  logoAlt?: string;
  title: string;
  actions: ReactNode;
  children: ReactNode;
}

const Modal = forwardRef(({hasClose = true, logo, logoAlt, closeAriaLabel = 'Close modal', title, actions, children}: Props, ref: ForwardedRef<ModalRef>): JSX.Element => {

  const dialogId = useId();

  const dialogRef = useRef<HTMLDialogElement>(null);

  const showDialog = (shouldShow: boolean) => {
    const body = document.querySelector('body');
    if (body) {
      if (shouldShow) {
        dialogRef.current?.showModal();
        body.style.overflowY = 'hidden';
      } else {
        dialogRef.current?.close();
        body.style.overflowY = 'auto';
      }
    }
  }

  useImperativeHandle(ref, () => {
    return {
      showModal() {
        showDialog(true);
      },
      close() {
        showDialog(false);
      },
      isOpen: dialogRef.current?.open || false
    }
  }, []);

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
        showDialog(false);
      }
    }
  }

  const handleFocus = useCallback((e: KeyboardEvent) => {
    if (dialogRef.current) {
      if (e.key === 'Escape') {
        showDialog(false);
      }
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
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleFocus);
    return () => {
      document.removeEventListener('keydown', handleFocus);
    }
  }, [handleFocus]);

  return (
    // Disabling as adding role="dialog" is required for some screen readers to announce properly
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <dialog
      ref={dialogRef}
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
            onClick={() => showDialog(false)}
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