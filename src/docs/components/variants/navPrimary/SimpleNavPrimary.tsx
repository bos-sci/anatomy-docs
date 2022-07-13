import NavPrimary from '../../../../library/components/navigation/navPrimary/NavPrimary';
import useTitle from '../../../shared/hooks/useTitle';

import logoBSC from '../../../../assets/images/logo-bsc-tagline.svg';
import { simpleData, utilityData } from './navPrimaryData';
import Example from '../../../shared/components/Example';

const logo = {
  src: logoBSC,
  alt: 'Boston Scientific logo',
  to: '/',
}

const SimpleNavPrimary = (): JSX.Element => {
  useTitle({titlePrefix: `Primary Navigation - Simple Example - Components`});
  return (
    <Example isFlush>
      <NavPrimary logo={logo} navItems={simpleData} utilityItems={utilityData} />
    </Example>
  );
}

export default SimpleNavPrimary;