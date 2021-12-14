import { VariantProps } from '../Preview';
import CheckboxList from './CheckboxList';
import CheckboxListError from './CheckboxListError';
import CheckboxListHelpText from './CheckboxListHelpText';
import Default from './Default';
import WithError from './WithError';
import WithHelpText from './WithHelpText';


const InputCheckboxVariants = ({ variantId }: VariantProps) => {
  switch (variantId) {
    case 'inputCheckboxHelpText':
      return <WithHelpText />;
    case 'inputCheckboxError':
      return <WithError />;
    case 'inputCheckboxList':
      return <CheckboxList />;
    case 'inputCheckboxListHelpText':
      return <CheckboxListHelpText />;
    case 'inputCheckboxListError':
      return <CheckboxListError />;
    default:
      return <Default />;
  }
}

export default InputCheckboxVariants;