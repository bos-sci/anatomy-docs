import { VariantProps } from '../Preview';
import Default from './Default';
import Disabled from './Disabled';
import ReadOnly from './ReadOnly';
import WithHelpText from './WithHelpText';

const InputTextVariants = ({ variant }: VariantProps) => {
  switch (variant.toLowerCase()) {
    case 'disabled field':
      return <Disabled />;
    case 'read-only field':
      return <ReadOnly />;
    case 'with help text':
      return <WithHelpText />;
    default:
      return <Default />;
  }
}

export default InputTextVariants;