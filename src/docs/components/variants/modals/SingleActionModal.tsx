import { useRef } from 'react';
import Button from '../../../../library/components/Button';
import Modal from '../../../../library/components/Modal';
import Example from '../../../shared/components/Example';

const SingleActionModal = (): JSX.Element => {

  const modalRef = useRef<HTMLDialogElement>(null);

  const actions = <>
    <Button variant="assertive">Confirm</Button>
    <Button variant="subtle" onClick={() => modalRef.current?.close()}>Cancel</Button>
  </>;

  return (
    <Example isFlex>
      <Button type="button" onClick={() => modalRef.current?.showModal()}>Open single action modal</Button>
      <Modal title="Modal title" actions={actions} ref={modalRef}>
        This is an example of a modal.
      </Modal>
    </Example>
  );
}

export default SingleActionModal;