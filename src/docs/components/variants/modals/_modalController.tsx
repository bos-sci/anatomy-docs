import { VariantProps } from '../Preview';
import DefaultModal from './DefaultModal';

const ModalController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    default:
      return <DefaultModal />;
  }
}

export default ModalController;