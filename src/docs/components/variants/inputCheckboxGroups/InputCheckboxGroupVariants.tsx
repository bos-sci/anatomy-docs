import { VariantProps } from '../Preview';
import WithHelpText from './WithHelpText';
import WithHelpErrorText from './WithHelpErrorText';
import Default from './Default';
import WithErrorText from './WithErrorText';
import Disabled from './Disabled';


const InputCheckboxVariants = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'inputCheckboxGroupWithHelpText':
      return <WithHelpText />;
    case 'inputCheckboxGroupWithErrorText':
      return <WithErrorText />;
    case 'inputCheckboxGroupWithHelpAndErrorText':
      return <WithHelpErrorText />;

    // States
    case 'inputCheckboxGroupDisabled':
      return <Disabled />;

    default:
      return <Default />;
  }
}

export default InputCheckboxVariants;