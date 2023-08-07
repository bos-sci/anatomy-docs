import { RefObject } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavPrimary, { NavNode } from 'library/components/navigation/navPrimary/NavPrimary';

import logoBSC from 'docs/assets/images/logo-bsc-tagline.svg';
import { simpleData, utilityData } from './navPrimaryData';
import Example from 'docs/shared/components/Example';
import { isActiveNode } from 'docs/shared/helpers';

const logo = {
  src: logoBSC,
  alt: 'Boston Scientific logo',
  to: '/'
};

const SimpleNavPrimary = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Example isFlush>
      <NavPrimary
        logo={logo}
        navItems={simpleData}
        utilityItems={utilityData}
        location={location}
        isActiveNode={(node: NavNode, ref: RefObject<HTMLAnchorElement>) => isActiveNode(node, ref, location)}
        navigateToSearchResult={(result) => navigate(result?.to as string)}
      />
    </Example>
  );
};

export default SimpleNavPrimary;
