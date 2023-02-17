import { useRef } from 'react';
import Button from '../../../../library/components/Button';
import Modal, { ModalRef } from '../../../../library/components/Modal';
import Example from '../../../shared/components/Example';
import BSCLogo from '../../../../assets/images/logo-bsc-tagline.svg';
import Link from '../../../../library/components/Link';

const LogoModal = (): JSX.Element => {

  const modalRef = useRef<ModalRef>(null);

  const actions = <>
    <Link href="www.google.com">Positive action</Link>
    <Button variant="subtle" onClick={() => modalRef.current?.close()}>Cancel</Button>
  </>;

  return (
    <Example>
      <Button type="button" aria-haspopup="true" onClick={() => modalRef.current?.showModal()}>Open modal with logo</Button>
      <Modal logo={BSCLogo} logoAlt="Boston scientific logo" title="Modal title" actions={actions} ref={modalRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl, congue bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante sollicitudin in. Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
      </Modal>
    </Example>
  );
}

export default LogoModal;