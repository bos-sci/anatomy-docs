import NavPrimary from '../../../../library/components/navigation/navPrimary/NavPrimary';

import logoBSC from '../../../../assets/images/logo-bsc-tagline.svg';
import { intermediateData, utilityData } from './navPrimaryData';
import Example from '../../../shared/components/Example';

const logo = {
  src: logoBSC,
  alt: 'Boston Scientific logo',
  to: '/'
}

const DefaultNavPrimary = (): JSX.Element => {
  return (
    <Example isFlush>
      <NavPrimary logo={logo} navItems={intermediateData} utilityItems={utilityData} />
    </Example>
  );
}

export default DefaultNavPrimary;