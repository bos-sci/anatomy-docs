import { VariantProps } from '../Preview';
import Default from './Default';
import Disabled from './Disabled';
import DisabledWithValue from './DisabledWithValue';
import ReadOnly from './ReadOnly';
import ReadOnlyWithValue from './ReadonlyWithValue';
import Required from './Required';
import WithError from './WithError';
import WithHelpAndError from './WithHelpAndError';
import WithHelpText from './WithHelpText';
import WithPlaceholder from './WithPlaceholder';

const InputTextVariants = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'inputTextWithErrorText':
      return <WithError />;
    case 'inputTextWithHelpAndErrorText':
      return <WithHelpAndError />;
    case 'inputTextWithHelpText':
      return <WithHelpText />;
    case 'inputTextWithPlaceholderText':
      return <WithPlaceholder />;

    // States
    case 'inputTextDisabled':
      return <Disabled />;
    case 'inputTextDisabledWithValue':
      return <DisabledWithValue />;
    case 'inputTextReadonly':
      return <ReadOnly />;
    case 'inputTextReadonlyWithValue':
      return <ReadOnlyWithValue />;
    case 'inputTextRequired':
      return <Required />;

    default:
      return <Default />;
  }
}

export default InputTextVariants;