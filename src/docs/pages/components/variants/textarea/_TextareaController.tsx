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
    case 'textAreaWithPlaceholderText':
      return <WithPlaceholder />;

    case 'textAreaWithHelpText':
      return <WithHelp />;

    case 'textAreaWithErrorMessage':
      return <WithError />;

    case 'textAreaWithHelpTextAndErrorMessage':
      return <WithHelpError />;

    case 'textAreaWithManualResize':
      return <WithManualResize />;

    case 'textAreaWithAutoResize':
      return <WithAutoResize />;

    // States
    case 'textAreaDisabled':
      return <Disabled />;

    case 'textAreaReadonly':
      return <Readonly />;

    case 'textAreaRequired':
      return <Required />;

    default:
      return <DefaultTextarea />;
  }
};

export default TextareaController;
