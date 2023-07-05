import { VariantProps } from '../Preview';
import DefaultStoplight from './DefaultStoplight';
import RedLightStyle from './RedLightStyle';
import YellowLightStyle from './YellowLightStyle';
import GreenLightStyle from './GreenLightStyle';

const StoplightController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Styles
    case 'stoplightRed':
      return <RedLightStyle />;
    case 'stoplightYellow':
      return <YellowLightStyle />;
    case 'stoplightGreen':
      return <GreenLightStyle />;

    default:
      return <DefaultStoplight />;
  }
};

export default StoplightController;
