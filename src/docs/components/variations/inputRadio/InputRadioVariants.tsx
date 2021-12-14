import { VariantProps } from '../Preview';
import Default from './Default';
import WithError from './WithError';
import WithHelpText from './WithHelpText';
import WithGroupHelpText from './WithGroupHelpText';

const InputRadioVariants = ({ variantId }: VariantProps) => {
  switch (variantId) {
    case 'inputRadioHelpText':
      return <WithHelpText />;
    case 'inputRadioGroupError':
      return <WithError />;
    case 'inputRadioGroupHelpText':
      return <WithGroupHelpText />;
    default:
      return <Default />;
  }
}

export default InputRadioVariants;