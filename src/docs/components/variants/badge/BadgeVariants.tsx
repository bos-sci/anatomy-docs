import { VariantProps } from '../Preview';
import DefaultBadge from './DefaultBadge';
import DefaultStyle from './DefaultStyle';
import AccentStyle from './AccentStyle';
import AssertiveStyle from './AssertiveStyle';

const BadgeVariants = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Styles
    case 'badgeDefault':
      return <DefaultStyle />;
    case 'badgeAccent':
      return <AccentStyle />;
    case 'badgeAssertive':
      return <AssertiveStyle />;

    default:
      return <DefaultBadge />;
  }
}

export default BadgeVariants;