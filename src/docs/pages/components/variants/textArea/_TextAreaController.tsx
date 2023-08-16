import { VariantProps } from '../Preview';
import DefaultTextArea from './DefaultTextArea';
import WithPlaceholder from './WithPlaceholder';
import WithHelp from './WithHelp';
import WithError from './WithError';
import WithHelpError from './WithHelpError';

const TextAreaController = ({ variantId }: VariantProps): JSX.Element => {
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

    // States

    default:
      return <DefaultTextArea />;
  }
};

export default TextAreaController;
