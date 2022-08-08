import { VariantProps } from '../Preview';
import DefaultInputText from './DefaultInputText';
import WithPlaceholder from './WithPlaceholder';
import WithHelp from './WithHelp';
import WithError from './WithError';
import WithHelpError from './WithHelpError';
import Disabled from './Disabled';
import Readonly from './Readonly';
import Required from './Required';

const InputTextController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'inputTextWithPlaceholderText':
      return <WithPlaceholder />;
    case 'inputTextWithHelpText':
      return <WithHelp />;
    case 'inputTextWithErrorMessage':
      return <WithError />;
    case 'inputTextWithHelpTextAndErrorMessage':
      return <WithHelpError />;

    // States
    case 'inputTextDisabled':
      return <Disabled />;
    case 'inputTextReadonly':
      return <Readonly />;
    case 'inputTextRequired':
      return <Required />;

    default:
      return <DefaultInputText />;
  }
}

export default InputTextController;