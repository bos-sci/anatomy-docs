import { VariantProps } from '../Preview';
import DefaultTextarea from './DefaultTextarea';
import WithPlaceholder from './WithPlaceholder';
import WithHelp from './WithHelp';
import WithError from './WithError';
import WithHelpError from './WithHelpError';
import WithManualResize from './WithManualResize';
import WithAutoResize from './WithAutoResize';
import Disabled from './Disabled';
import Readonly from './Readonly';
import Required from './Required';

const TextareaController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'textareaWithPlaceholderText':
      return <WithPlaceholder />;

    case 'textareaWithHelpText':
      return <WithHelp />;

    case 'textareaWithErrorMessage':
      return <WithError />;

    case 'textareaWithHelpTextAndErrorMessage':
      return <WithHelpError />;

    case 'textareaWithManualResize':
      return <WithManualResize />;

    case 'textareaWithAutoResize':
      return <WithAutoResize />;

    // States
    case 'textareaDisabled':
      return <Disabled />;

    case 'textareaReadonly':
      return <Readonly />;

    case 'textareaRequired':
      return <Required />;

    default:
      return <DefaultTextarea />;
  }
};

export default TextareaController;
