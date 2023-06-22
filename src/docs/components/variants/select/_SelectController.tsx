import { VariantProps } from '../Preview';
import DefaultSelect from './DefaulSelect';
import Disabled from './Disabled';
import Required from './Required';
import WithError from './WithError';
import WithHelp from './WithHelp';
import WithHelpError from './WithHelpError';
import WithPlaceholder from './WithPlaceholder';

const SelectController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'selectWithPlaceholder':
      return <WithPlaceholder />;

    case 'selectWithHelpText':
      return <WithHelp />;

    case 'selectWithError':
      return <WithError />;

    case 'selectWithHelpAndError':
      return <WithHelpError />;

    // States

    case 'selectDisabled':
      return <Disabled />;

    case 'selectRequired':
      return <Required />;

    default:
      return <DefaultSelect />;
  }
};

export default SelectController;
