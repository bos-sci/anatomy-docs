import { useRef } from 'react';
import Button from 'library/components/Button';
import Modal, { ModalRef } from 'library/components/Modal';
import Example from 'docs/shared/components/Example';

const SingleActionModal = (): JSX.Element => {
  const modalRef = useRef<ModalRef>(null);

  const positiveAction = <Button>Positive action</Button>;

  return (
    <Example isFlex>
      <Button type="button" onClick={() => modalRef.current?.showModal()}>
        Open single action modal
      </Button>
      <Modal ref={modalRef} title="Modal title" positiveAction={positiveAction}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl, congue
        bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante sollicitudin in.
        Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
      </Modal>
    </Example>
  );
};

export default SingleActionModal;
