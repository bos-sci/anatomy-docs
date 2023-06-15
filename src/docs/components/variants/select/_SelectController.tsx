import { VariantProps } from '../Preview';
import DefaultSelect from './DefaulSelect';

const SelectController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers

    // States

    default:
      return <DefaultSelect />;
  }
};

export default SelectController;
