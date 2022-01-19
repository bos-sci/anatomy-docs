import { VariantProps } from '../Preview';
import Default from './Default';
import WithError from './WithError';
import WithHelpText from './WithHelpText';
import Disabled from './Disabled';
import WithHelpAndErrorText from './WithHelpAndErrorText';

const InputRadioVariants = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'inputRadioGroupWithHelpText':
      return <WithHelpText />;
    case 'inputRadioGroupWithErrorText':
      return <WithError />;
    case 'inputRadioGroupWithHelpAndErrorText':
      return <WithHelpAndErrorText />;

    // States
    case 'inputRadioGroupDisabled':
      return <Disabled />;

    default:
      return <Default />;
  }
}

export default InputRadioVariants;