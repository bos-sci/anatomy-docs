import { VariantProps } from '../Preview';
import Default from './Default';
import Ghost from './Ghost';
import Subtle from './Subtle';

const LinkVariants = ({ variant }: VariantProps) => {
  switch (variant) {
    case 'Ghost':
      return <Ghost />;
    case 'Subtle':
      return <Subtle />;
    default:
      return <Default />;
  }
}

export default LinkVariants;