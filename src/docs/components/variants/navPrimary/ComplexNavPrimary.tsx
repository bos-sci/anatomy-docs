import NavPrimary from '../../../../library/components/navigation/navPrimary/NavPrimary';
import useTitle from '../../../shared/hooks/useTitle';

import logoBSC from '../../../../assets/images/logo-bsc-tagline.svg';
import { complexData, utilityData } from './navPrimaryData';
import Example from '../../../shared/components/Example';

const logo = {
  src: logoBSC,
  alt: 'Boston Scientific logo',
  to: '/'
}

const ComplexNavPrimary = (): JSX.Element => {
  useTitle({titlePrefix: `Primary Navigation - Complex Example - Components`});
  return (
    <Example isFlush>
      <NavPrimary logo={logo} navItems={complexData} utilityItems={utilityData} />
    </Example>
  );
}

export default ComplexNavPrimary;