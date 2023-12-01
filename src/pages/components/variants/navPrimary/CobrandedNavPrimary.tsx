import { RefObject } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavPrimary, NavNodePrimary } from '@boston-scientific/anatomy-react';

import logoBSC from 'assets/images/logo-bsc.svg';
import logo from 'assets/images/watchman-integrate-solutions-logo.svg';
import { simpleData, utilityData } from './navPrimaryData';
import Example from 'shared/components/Example';
import { isActiveNode } from 'shared/helpers';

const primaryLogo = {
  src: logo,
  alt: 'WATCHMAN logo',
  to: '/'
};

const secondaryLogo = {
  src: logoBSC,
  alt: 'Boston Scientific logo'
};

const CobrandedNavPrimary = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Example isFlush>
      <NavPrimary
        logo={primaryLogo}
        logoSecondary={secondaryLogo}
        navItems={simpleData}
        utilityItems={utilityData}
        location={location}
        isActiveNode={(node: NavNodePrimary, ref: RefObject<HTMLAnchorElement>) => isActiveNode(node, ref, location)}
        navigateToSearchResult={(result) => navigate(result.to as string)}
      />
    </Example>
  );
};

export default CobrandedNavPrimary;
