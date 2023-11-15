import { VariantProps } from '../Preview';
import CenterAligned from './CenterAligned';
import DefaultCallout from './DefaultCallout';
import DefaultStyle from './DefaultStyle';

const CalloutController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    case 'calloutCentered':
      return <CenterAligned />;
    case 'calloutDefault':
      return <DefaultStyle />;
    default:
      return <DefaultCallout />;
  }
};

export default CalloutController;
