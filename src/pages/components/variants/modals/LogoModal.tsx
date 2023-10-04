import { useRef } from 'react';
import { Button } from '@boston-scientific/anatomy-react';
import { Modal, ModalRef } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';
import BSCLogo from 'assets/images/logo-bsc-tagline.svg';
import { Link } from '@boston-scientific/anatomy-react';

const LogoModal = (): JSX.Element => {
  const modalRef = useRef<ModalRef>(null);

  const positiveAction = <Link to="docs-demo-link">Positive action</Link>;
  const negativeAction = (
    <Link
      to="docs-demo-link"
      onClick={(e) => {
        // Overriding link behavior so it behaves like a button while allowing us to visually test link styles
        e.preventDefault();
        modalRef.current?.close();
      }}
    >
      Cancel
    </Link>
  );

  return (
    <Example>
      <Button type="button" aria-haspopup="true" onClick={() => modalRef.current?.showModal()}>
        Open modal with logo
      </Button>
      <Modal
        ref={modalRef}
        logo={BSCLogo}
        logoAlt="Boston scientific logo"
        title="Modal title"
        positiveAction={positiveAction}
        negativeAction={negativeAction}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl, congue
        bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante sollicitudin in.
        Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
      </Modal>
    </Example>
  );
};

export default LogoModal;
