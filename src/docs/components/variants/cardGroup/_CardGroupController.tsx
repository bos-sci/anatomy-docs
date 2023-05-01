import { VariantProps } from '../Preview';
import TwoUp from './TwoUp';
import ThreeUp from './ThreeUp';
import FourUp from './FourUp';

const CardGroupController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Styles
    case 'twoUp':
      return <TwoUp />;
    case 'threeUp':
      return <ThreeUp />;
    case 'fourUp':
      return <FourUp />;

    default:
      return <TwoUp />;
  }
};

export default CardGroupController;
