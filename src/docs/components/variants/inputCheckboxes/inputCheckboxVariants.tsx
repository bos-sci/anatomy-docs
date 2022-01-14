import { VariantProps } from '../Preview';
import Default from './Default';
import WithError from './WithErrorText';
import WithHelpText from './WithHelpText';
import WithHelpErrorText from './WithHelpErrorText';
import Disabled from './Disabled';
import Readonly from './Readonly';


const InputCheckboxVariants = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'inputCheckboxWithHelpText':
      return <WithHelpText />;
    case 'inputCheckboxWithErrorText':
      return <WithError />;
    case 'inputCheckboxWithHelpAndErrorText':
      return <WithHelpErrorText />;

    // States
    case 'inputCheckboxDisabled':
      return <Disabled />;
    case 'inputCheckboxReadonly':
      return <Readonly />;


    default:
      return <Default />;
  }
}

export default InputCheckboxVariants;