import NavPrimary from '../../../../library/components/navigation/navPrimary/NavPrimary';
import useTitle from '../../../shared/hooks/useTitle';

import logoBSC from '../../../../assets/images/logo-bsc-tagline.svg';
import { complexData, utilityData } from './navPrimaryData';

const logo = {
  src: logoBSC,
  alt: 'Boston Scientific logo',
  to: '/'
}

const ComplexNavPrimary = (): JSX.Element => {
  useTitle({titlePrefix: `Primary Navigation - Complex Example - Components`});
  return (
    <NavPrimary logo={logo} navItems={complexData} utilityItems={utilityData} />
  );
}

export default ComplexNavPrimary;