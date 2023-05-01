import { VariantProps } from '../Preview';
import DefaultNavBack from './DefaultNavBack';
import SubtleNavBack from './SubtleNavBack';

const NavBackController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Styles
    case 'backButtonDefault':
      return <DefaultNavBack />;
    case 'backButtonSubtle':
      return <SubtleNavBack />;

    default:
      return <DefaultNavBack />;
  }
};

export default NavBackController;
