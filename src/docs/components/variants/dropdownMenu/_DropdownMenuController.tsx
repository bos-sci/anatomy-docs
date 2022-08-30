import { VariantProps } from '../Preview';
import DefaultDropdownMenu from './DefaultDropdownMenu';

const DropdownMenuController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    // case 'breadcrumbsOverflow':
    //   return <OverflowBreadcrumbs />;

    default:
      return <DefaultDropdownMenu />;
  }
}

export default DropdownMenuController;