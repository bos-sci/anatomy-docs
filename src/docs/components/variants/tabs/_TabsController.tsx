import { VariantProps } from '../Preview';
import DefaultTabs from './DefaultTabs';
import OverflowTabs from './OverflowTabs';

const TabsController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // modifiers
    case 'tabsOverflow':
      return <OverflowTabs />;

    default:
      return <DefaultTabs />;
  }
};

export default TabsController;
