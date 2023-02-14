import { useRef } from 'react';
import Button from '../../../../library/components/Button';
import Modal from '../../../../library/components/Modal';
import Example from '../../../shared/components/Example';

const RequiredActionModal = (): JSX.Element => {

  const modalRef = useRef<HTMLDialogElement>(null);

  const actions = <>
    <Button variant="assertive">Positive action</Button>
    <Button variant="subtle" onClick={() => modalRef.current?.close()}>Cancel</Button>
  </>;

  return (
    <Example>
      <Button type="button" aria-haspopup="true" onClick={() => modalRef.current?.showModal()}>Open required action modal</Button>
      <Modal hasClose={false} title="Modal title" actions={actions} ref={modalRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl, congue bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante sollicitudin in. Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
      </Modal>
    </Example>
  );
}

export default RequiredActionModal;