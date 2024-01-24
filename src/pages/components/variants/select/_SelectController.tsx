import { VariantProps } from '../Preview';
import DefaultSelect from './DefaulSelect';
import Disabled from './Disabled';
import FilterSelect from './FilterSelect';
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

    case 'selectFilter':
      return <FilterSelect />;

    // States

    case 'selectDisabled':
      return <Disabled />;

    default:
      return <DefaultSelect />;
  }
};

export default SelectController;
