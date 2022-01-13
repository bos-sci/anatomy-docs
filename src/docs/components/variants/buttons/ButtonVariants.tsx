import { VariantProps } from '../Preview';
import Default from './Default';
import Assertive from './Assertive';
import Ghost from './Ghost';
import Subtle from './Subtle';
import IconLeft from './IconLeft';
import IconRight from './IconRight';
import IconOnly from './IconOnly';
import Disabled from './Disabled';

const ButtonVariants = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'buttonIconLeft':
      return <IconLeft />;
    case 'buttonIconRight':
      return <IconRight />;
    case 'buttonIconOnly':
      return <IconOnly />;

    // Styles
    case 'buttonAssertive':
      return <Assertive />;
    case 'buttonGhost':
      return <Ghost />;
    case 'buttonSubtle':
      return <Subtle />;

    // States
    case 'buttonDisabled':
      return <Disabled />;

    default:
      return <Default />;
  }
}

export default ButtonVariants;