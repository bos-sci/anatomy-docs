import {
  cloneElement,
  ForwardedRef,
  forwardRef,
  FunctionComponent,
  PointerEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import Button, { Props as ButtonProps } from './Button';
import { Props as LinkProps } from './Link';

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
  positiveAction: ReactElement<ButtonProps | LinkProps>;
  negativeAction?: ReactElement<ButtonProps | LinkProps>;
  children: ReactNode;
  onClose?: () => void;
  onShowModal?: () => void;
}

const Modal = forwardRef(
  (
    {
      hasClose = true,
      logo,
      logoAlt,
      closeAriaLabel = 'Close modal',
      title,
      positiveAction,
      negativeAction,
      children,
      onClose,
      onShowModal
    }: Props,
    ref: ForwardedRef<ModalRef>
  ): JSX.Element => {
    const dialogId = useId();

    const [positive, setPositive] = useState<ReactElement<ButtonProps | LinkProps>>();
    const [negative, setNegative] = useState<ReactElement<ButtonProps | LinkProps>>();

    const dialogRef = useRef<HTMLDialogElement>(null);

    // Clone positive action to force assertive button style
    useEffect(() => {
      if (positiveAction) {
        const attrs = {
          variant: 'assertive',
          className: ''
        };
        if ((positiveAction.type as FunctionComponent).displayName === 'Link') {
          attrs.className = 'bsds-button-assertive';
        }
        setPositive(cloneElement(positiveAction, attrs));
      }
    }, [positiveAction]);

    // Clone negative action to force default button when close not present and subtle when close present
    useEffect(() => {
      if (negativeAction) {
        const attrs = {
          variant: hasClose ? 'subtle' : 'default',
          className: ''
        };
        if ((negativeAction.type as FunctionComponent).displayName === 'Link') {
          attrs.className = hasClose ? 'bsds-button-subtle' : 'bsds-button';
        }
        setNegative(cloneElement(negativeAction, attrs));
      }
    }, [negativeAction, hasClose]);

    /**
     * Opens or closes the modal, and manages overflowY on body.
     * When modal is open overflowY is hidden, when modal is closed overflowY is auto.
     * @param {boolean} shouldShow - Modal opens when true, closes when false.
     */
    const showDialog = useCallback(
      (shouldShow: boolean) => {
        const body = document.querySelector('body');
        if (body && dialogRef.current) {
          if (shouldShow) {
            dialogRef.current.showModal();
            body.style.overflowY = 'hidden';
            if (onShowModal) {
              onShowModal();
            }
          } else {
            dialogRef.current.close();
            body.style.overflowY = 'auto';
            if (onClose) {
              onClose();
            }
          }
        }
      },
      [onClose, onShowModal]
    );

    // Defines the methods and properties on the ModalRef.
    useImperativeHandle(
      ref,
      () => {
        return {
          showModal() {
            showDialog(true);
          },
          close() {
            showDialog(false);
          },
          isOpen: dialogRef.current?.open || false
        };
      },
      [showDialog]
    );

    /**
     * Closes the modal when clicking anywhere outside of the modal.
     * @param {PointerEvent} e - Pointer event
     */
    const clickOut = (e: PointerEvent) => {
      const dialogBox = dialogRef.current?.getBoundingClientRect();
      if (dialogBox) {
        const isInDialog =
          dialogBox.top <= e.clientY &&
          e.clientY <= dialogBox.top + dialogBox.height &&
          dialogBox.left <= e.clientX &&
          e.clientX <= dialogBox.left + dialogBox.width;
        if (!isInDialog) {
          showDialog(false);
        }
      }
    };

    /**
     * Loops the focus back around when you are on the last element and tab, or first element and shift-tab.
     * @param {KeyboardEvent} e - Keyboard event
     */
    const handleFocus = useCallback(
      (e: KeyboardEvent) => {
        if (dialogRef.current) {
          if (e.key === 'Escape') {
            showDialog(false);
          }
          const focusableElements = [
            ...dialogRef.current.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
          ] as HTMLElement[];
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
      },
      [showDialog]
    );

    useEffect(() => {
      document.addEventListener('keydown', handleFocus);
      return () => {
        document.removeEventListener('keydown', handleFocus);
      };
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
          {!!logo && <img src={logo} alt={logoAlt} className="bsds-modal-logo" />}
          <h2 id={dialogId + '-heading'} className="bsds-modal-title">
            {title}
          </h2>
          {!!hasClose && (
            <Button
              data-testid="modalCloseBtn"
              variant="subtle"
              icon="close"
              className="bsds-modal-close"
              aria-label={closeAriaLabel}
              onClick={() => showDialog(false)}
            />
          )}
        </div>
        <div id={dialogId + '-body'} className="bsds-modal-body">
          {children}
        </div>
        <div className="bsds-modal-footer">
          {positive}
          {negative}
        </div>
      </dialog>
    );
  }
);

Modal.displayName = 'Modal';
export default Modal;
