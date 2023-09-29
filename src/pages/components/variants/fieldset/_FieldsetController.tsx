import { VariantProps } from '../Preview';
import DefaultFieldset from './DefaultFieldset';
import WithHelp from './WithHelp';
import WithError from './WithError';
import WithHelpError from './WithHelpError';
import Disabled from './Disabled';

const FieldsetController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'fieldsetWithhelpText':
      return <WithHelp />;

    case 'fieldsetWitherrorMessage':
      return <WithError />;

    case 'fieldsetWithhelpTextandErrormessage':
      return <WithHelpError />;

    // States
    case 'fieldsetDisabled':
      return <Disabled />;

    default:
      return <DefaultFieldset />;
  }
};

export default FieldsetController;
