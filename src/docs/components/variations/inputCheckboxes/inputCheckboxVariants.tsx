import { VariantProps } from '../Preview';
import CheckboxList from './CheckboxList';
import CheckboxListError from './CheckboxListError';
import CheckboxListHelpText from './CheckboxListHelpText';
import Default from './Default';
import WithError from './WithError';
import WithHelpText from './WithHelpText';


const InputCheckboxVariants = ({ variant }: VariantProps) => {
  switch (variant.toLowerCase()) {
    case 'with help text':
      return <WithHelpText />;
    case 'with an error':
      return <WithError />;
    case 'checkbox list':
      return <CheckboxList />;
    case 'checkbox list with help text':
      return <CheckboxListHelpText />;
    case 'checkbox list with an error':
      return <CheckboxListError />;
    default:
      return <Default />;
  }
}

export default InputCheckboxVariants;