import { useRef } from 'react';
import Button from '../../../../library/components/Button';
import Modal from '../../../../library/components/Modal';
import Example from '../../../shared/components/Example';
import BSCLogo from '../../../../assets/images/logo-bsc-tagline.svg';

const LogoModal = (): JSX.Element => {

  const modalRef = useRef<HTMLDialogElement>(null);

  const actions = <>
    <Button variant="assertive">Confirm</Button>
    <Button variant="subtle" onClick={() => modalRef.current?.close()}>Cancel</Button>
  </>;

  return (
    <Example>
      <Button type="button" aria-haspopup="true" onClick={() => modalRef.current?.showModal()}>Open modal with logo</Button>
      <Modal logo={BSCLogo} logoAlt="Boston scientific logo" title="Modal title" actions={actions} ref={modalRef}>
        This is an example of a modal.
      </Modal>
    </Example>
  );
}

export default LogoModal;