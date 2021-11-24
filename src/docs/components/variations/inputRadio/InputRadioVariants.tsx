import { VariantProps } from '../Preview';
import Default from './Default';
import WithError from './WithError';
import WithHelpText from './WithHelpText';
import WithGroupHelpText from './WithGroupHelpText';

const InputRadioVariants = ({ variant }: VariantProps) => {
  switch (variant.toLowerCase()) {
    case 'with radio button help text':
      return <WithHelpText />;
    case 'with an error':
      return <WithError />;
    case 'with group help text':
      return <WithGroupHelpText />;
    default:
      return <Default />;
  }
}

export default InputRadioVariants;