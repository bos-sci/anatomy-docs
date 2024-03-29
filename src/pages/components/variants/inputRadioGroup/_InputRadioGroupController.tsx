import { VariantProps } from '../Preview';
import DefaultInputRadioGroup from './DefaultInputRadioGroup';
import WithHelp from './WithHelp';
import WithError from './WithError';
import WithHelpError from './WithHelpError';
import Disabled from './Disabled';
import ButtonGroupStyle from './ButtonGroupStyle';
import DefaultRadioGroupStyle from './DefaultRadioGroupStyle';

const InputRadioController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'inputRadioGroupWithHelpText':
      return <WithHelp />;
    case 'inputRadioGroupWithErrorMessage':
      return <WithError />;
    case 'inputRadioGroupWithHelpTextAndErrorMessage':
      return <WithHelpError />;

    // Styles
    case 'defaultRadioGroupStyle':
      return <DefaultRadioGroupStyle />;
    case 'buttonGroupStyle':
      return <ButtonGroupStyle />;

    // States
    case 'inputRadioGroupDisabled':
      return <Disabled />;

    default:
      return <DefaultInputRadioGroup />;
  }
};

export default InputRadioController;
