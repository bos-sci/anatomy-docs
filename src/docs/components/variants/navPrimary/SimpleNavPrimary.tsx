import NavPrimary from '../../../../library/components/navigation/navPrimary/NavPrimary';
import useTitle from '../../../shared/hooks/useTitle';

import logoBSC from '../../../../assets/images/logo-bsc-tagline.svg';
import { simpleData, utilityData } from './navPrimaryData';

const logo = {
  src: logoBSC,
  alt: 'Boston scientific logo',
  to: '/',
  ariaLabel: 'Boston scientific home'
}

const SimpleNavPrimary = (): JSX.Element => {
  useTitle({titlePrefix: `Primary Navigation - Simple Example - Components`});
  return (
    <NavPrimary logo={logo} navItems={simpleData} utilityItems={utilityData} hasSearch={false} />
  );
}

export default SimpleNavPrimary;