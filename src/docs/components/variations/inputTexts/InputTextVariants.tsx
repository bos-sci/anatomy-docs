import { VariantProps } from '../Preview';
import Default from './Default';
import Disabled from './Disabled';
import ReadOnly from './ReadOnly';
import Required from './Required';
import WithError from './WithError';
import WithHelpText from './WithHelpText';

const InputTextVariants = ({ variant }: VariantProps) => {
  switch (variant.toLowerCase()) {
    case 'disabled field':
      return <Disabled />;
    case 'read-only field':
      return <ReadOnly />;
    case 'required field':
      return <Required />;
    case 'with help text':
      return <WithHelpText />;
    case 'with an error message':
      return <WithError />;
    default:
      return <Default />;
  }
}

export default InputTextVariants;