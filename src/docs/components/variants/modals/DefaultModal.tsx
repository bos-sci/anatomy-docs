import { useRef } from 'react';
import Button from '../../../../library/components/Button';
import Modal, { ModalRef } from '../../../../library/components/Modal';
import Example from '../../../shared/components/Example';

const DefaultModal = (): JSX.Element => {

  const modalRef = useRef<ModalRef>(null);

  const positiveAction = <Button>Positive action</Button>;
  const negativeAction = <Button onClick={() => modalRef.current?.close()}>Cancel</Button>;

  return (
    <Example>
      <Button type="button" aria-haspopup="true" onClick={() => modalRef.current?.showModal()}>Open modal</Button>
      <Modal title="Modal title" positiveAction={positiveAction} negativeAction={negativeAction} ref={modalRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl, congue bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante sollicitudin in. Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
      </Modal>
    </Example>
  );
}

export default DefaultModal;