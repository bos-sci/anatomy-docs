import { VariantProps } from '../Preview';
import Default from './Default';
import Assertive from './Assertive';
import Ghost from './Ghost';
import Subtle from './Subtle';

const ButtonVariants = ({ variant }: VariantProps) => {
  switch (variant) {
    case 'Assertive':
      return <Assertive />;
    case 'Ghost':
      return <Ghost />;
    case 'Subtle':
      return <Subtle />;
    default:
      return <Default />;
  }
}

export default ButtonVariants;