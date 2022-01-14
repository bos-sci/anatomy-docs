import { VariantProps } from '../Preview';
import CheckboxGroupErrorText from './CheckboxGroupErrorText';
import CheckboxGroupHelpText from './CheckboxGrouHelpText';
import CheckboxGroupHelpErrorText from './CheckboxGroupHelpErrorText';
import Default from './Default';


const InputCheckboxVariants = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'inputCheckboxGroupWithHelpText':
      return <CheckboxGroupHelpText />;
    case 'inputCheckboxGroupWithErrorText':
      return <CheckboxGroupErrorText />;
    case 'inputCheckboxGroupWithHelpAndErrorText':
      return <CheckboxGroupHelpErrorText />;

    // States
    /* case 'inputCheckboxList':
      return <CheckboxList />; */

    default:
      return <Default />;
  }
}

export default InputCheckboxVariants;