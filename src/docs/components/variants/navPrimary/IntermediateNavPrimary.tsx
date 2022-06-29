import NavPrimary from '../../../../library/components/navigation/navPrimary/NavPrimary';
import useTitle from '../../../shared/hooks/useTitle';

import logoBSC from '../../../../assets/images/logo-bsc-tagline.svg';
import { intermediateData, utilityData } from './navPrimaryData';

const logo = {
  src: logoBSC,
  alt: 'Boston scientific logo',
  to: '/',
  ariaLabel: 'Boston scientific home'
}

const IntermediateNavPrimary = (): JSX.Element => {
  useTitle({titlePrefix: `Primary Navigation - Simple Example - Components`});
  return (
    <NavPrimary logo={logo} navItems={intermediateData} utilityItems={utilityData} hasSearch={false} />
  );
}

export default IntermediateNavPrimary;