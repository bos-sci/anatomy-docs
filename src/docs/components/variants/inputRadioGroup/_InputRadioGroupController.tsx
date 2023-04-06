import { VariantProps } from '../Preview';
import DefaultInputRadioGroup from './DefaultInputRadioGroup';
import WithHelp from './WithHelp';
import WithError from './WithError';
import WithHelpError from './WithHelpError';
import Disabled from './Disabled';

const InputRadioController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'inputRadioGroupWithHelpText':
      return <WithHelp />;
    case 'inputRadioGroupWithErrorMessage':
      return <WithError />;
    case 'inputRadioGroupWithHelpTextAndErrorMessage':
      return <WithHelpError />;

    // States
    case 'inputRadioGroupDisabled':
      return <Disabled />;

    default:
      return <DefaultInputRadioGroup />;
  }
};

export default InputRadioController;
