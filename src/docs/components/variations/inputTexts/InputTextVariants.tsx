import { VariantProps } from '../Preview';
import Default from './Default';
import Disabled from './Disabled';
import ReadOnly from './ReadOnly';
import Required from './Required';
import WithError from './WithError';
import WithHelpText from './WithHelpText';

const InputTextVariants = ({ variantId }: VariantProps) => {
  switch (variantId) {
    case 'inputTextDisabled':
      return <Disabled />;
    case 'inputTextReadonly':
      return <ReadOnly />;
    case 'inputTextRequired':
      return <Required />;
    case 'inputTextHelpText':
      return <WithHelpText />;
    case 'inputTextError':
      return <WithError />;
    default:
      return <Default />;
  }
}

export default InputTextVariants;