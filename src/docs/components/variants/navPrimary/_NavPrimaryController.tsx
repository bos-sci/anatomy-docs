import { Link } from 'react-router-dom';
import { VariantProps } from '../Preview';
import DefaultNavPrimary from './ComplexNavPrimary';

const NavPrimaryController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Styles
    case 'primaryNavigationSimple':
      return <Link className="demo-link" to="/components/navigation/primary-navigation/simple-example" target="_blank">See simple example</Link>;
    case 'primaryNavigationIntermediate':
      return <Link className="demo-link" to="/components/navigation/primary-navigation/intermediate-example" target="_blank">See intermediate example</Link>;
    case 'primaryNavigationComplex':
      return <Link className="demo-link" to="/components/navigation/primary-navigation/complex-example" target="_blank">See complex example</Link>;

    default:
      return <Link className="demo-link" to="/components/navigation/primary-navigation/simple-example" target="_blank">See example</Link>;
  }
}

export default NavPrimaryController;