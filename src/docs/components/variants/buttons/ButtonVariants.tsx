import { VariantProps } from '../Preview';
import DefaultButton from './DefaultButton';
import IconLeft from './IconLeft';
import IconRight from './IconRight';
import Icon from './Icon';
import DefaultStyle from './DefaultStyle';
import AssertiveStyle from './AssertiveStyle';
import GhostStyle from './GhostStyle';
import SubtleStyle from './SubtleStyle';
import Disabled from './Disabled';

const ButtonVariants = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'buttonIconLeft':
      return <IconLeft />;
    case 'buttonIconRight':
      return <IconRight />;
    case 'buttonIcon':
      return <Icon />;

    // Styles
    case 'buttonDefault':
      return <DefaultStyle />;
    case 'buttonAssertive':
      return <AssertiveStyle />;
    case 'buttonGhost':
      return <GhostStyle />;
    case 'buttonSubtle':
      return <SubtleStyle />;

    // States
    case 'buttonDisabled':
      return <Disabled />;

    default:
      return <DefaultButton />;
  }
}

export default ButtonVariants;