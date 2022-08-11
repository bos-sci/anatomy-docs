import { VariantProps } from '../Preview';
import DefaultInputCheckboxGroup from './DefaultInputCheckboxGroup';
import WithHelp from './WithHelp';
import WithError from './WithError';
import WithHelpError from './WithHelpError';
import Disabled from './Disabled';

const InputCheckboxController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'inputCheckboxGroupWithHelpText':
      return <WithHelp />;
    case 'inputCheckboxGroupWithErrorMessage':
      return <WithError />;
    case 'inputCheckboxGroupWithHelpTextAndErrorMessage':
      return <WithHelpError />;

    // States
    case 'inputCheckboxGroupDisabled':
      return <Disabled />;

    default:
      return <DefaultInputCheckboxGroup />;
  }
}

export default InputCheckboxController;