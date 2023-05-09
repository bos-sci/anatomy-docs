import { VariantProps } from '../Preview';
import DefaultBreadcrumbs from './DefaultBreadcrumbs';
import OverflowBreadcrumbs from './OverflowBreadcrumbs';

const BreadcrumbController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'breadcrumbsOverflow':
      return <OverflowBreadcrumbs />;

    default:
      return <DefaultBreadcrumbs />;
  }
};

export default BreadcrumbController;
