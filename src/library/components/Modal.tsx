import { ForwardedRef, forwardRef, MutableRefObject, ReactNode, useCallback, useEffect, useId, useRef, useState } from 'react';
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
  const closeBtnRef = useRef<HTMLButtonElement>(null);

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
    >
      <div className="bsds-modal-header">
        { logo && <img src={logo} alt={logoAlt} className="bsds-modal-logo" /> }
        <h2 id={dialogId + '-heading'} className="bsds-modal-title">{ title }</h2>
        { hasClose &&
          <Button
            ref={closeBtnRef}
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