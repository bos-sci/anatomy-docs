import { VariantProps } from '../Preview';
import DefaultInputCheckbox from './DefaultInputCheckbox';
import WithHelp from './WithHelp';
import WithError from './WithError';
import WithHelpError from './WithHelpError';
import Disabled from './Disabled';

const InputCheckboxController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'inputCheckboxWithHelpText':
      return <WithHelp />;
    case 'inputCheckboxWithErrorMessage':
      return <WithError />;
    case 'inputCheckboxWithHelpTextAndErrorMessage':
      return <WithHelpError />;

    // States
    case 'inputCheckboxDisabled':
      return <Disabled />;

    default:
      return <DefaultInputCheckbox />;
  }
}

export default InputCheckboxController;