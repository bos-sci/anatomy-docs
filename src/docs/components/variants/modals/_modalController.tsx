import { VariantProps } from '../Preview';
import SingleActionModal from './SingleActionModal';
import LogoModal from './LogoModal';
import RequiredActionModal from './RequiredAcitonModal';

const ModalController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'modalLogo':
      return <LogoModal />
    case 'modalRequiredAction':
      return <RequiredActionModal />
    case 'modalSingleAction':
      return <SingleActionModal />
    default:
      return <SingleActionModal />;
  }
}

export default ModalController;