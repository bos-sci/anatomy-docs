import { useRef } from 'react';
import Button from '../../../../library/components/Button';
import Modal from '../../../../library/components/Modal';
import Example from '../../../shared/components/Example';
import ADSLogo from '../../../../assets/images/logo-anatomy.svg';
import BSCLogo from '../../../../assets/images/logo-bsc-tagline.svg';

const DefaultModal = (): JSX.Element => {

  const modalRef = useRef<HTMLDialogElement>(null);
  const modalRef2 = useRef<HTMLDialogElement>(null);

  const actions = <>
    <Button variant="assertive">Confirm</Button>
    <Button variant="subtle" onClick={() => modalRef.current?.close()}>Cancel</Button>
  </>;

  return (
    <Example>
      <Button type="button" onClick={() => modalRef.current?.showModal()}>Open modal</Button>
      <Modal title="Modal title" actions={actions} ref={modalRef}>
        This is an example of a modal.
      </Modal>
      <Button type="button" aria-haspopup="true" onClick={() => modalRef2.current?.showModal()}>Open modal</Button>
      <Modal logo={BSCLogo} title="Modal title" actions={actions} ref={modalRef2}>
        This is an example of a modal.
      </Modal>
    </Example>
  );
}

export default DefaultModal;