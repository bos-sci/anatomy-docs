import { matchPath, resolvePath, useLocation, useNavigate } from 'react-router-dom';
import { RefObject } from 'react';
import NavPrimary, { NavNode } from 'library/components/navigation/navPrimary/NavPrimary';

import logoBSC from 'docs/assets/images/logo-bsc-tagline.svg';
import { complexData, utilityData } from './navPrimaryData';
import Example from 'docs/shared/components/Example';

const logo = {
  src: logoBSC,
  alt: 'Boston Scientific logo',
  to: '/'
};

const ComplexNavPrimary = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveNode = (node: NavNode, ref: RefObject<HTMLAnchorElement>) => {
    return !!matchPath(
      { path: resolvePath(node.to ? node.to : node.href || '', location.pathname).pathname },
      location.pathname
    );
  };

  return (
    <Example isFlush>
      <NavPrimary
        logo={logo}
        navItems={complexData}
        utilityItems={utilityData}
        location={location}
        isActiveNode={isActiveNode}
        navigateToSearchResult={(result) => navigate(result.to as string)}
      />
    </Example>
  );
};

export default ComplexNavPrimary;
