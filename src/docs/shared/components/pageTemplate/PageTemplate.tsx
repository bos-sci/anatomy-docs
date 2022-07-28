import { ReactNode, useEffect, useState } from 'react';
import Markdown from '../Markdown';
import NavSecondary, { NavItemSecondary } from '../../../../library/components/navigation/navSecondary/NavSecondary';
import NavTertiary, { NavItemTertiary } from '../../../../library/components/navigation/navTertiary/NavTertiary';
import { Helmet } from 'react-helmet'

interface Props {
  name: string;
  lastUpdated: string;
  leadParagraph: string;
  seoMetaDescription: string;
  navSecondaryItems?: NavItemSecondary[];
  navSecondaryMenuTrigger?: string;
  navTertiaryItems: NavItemTertiary[];
  children: ReactNode;
}

const PageTemplate = (props: Props) => {

  const [navSecondaryTexts, setNavSecondaryTexts] = useState({});

  useEffect(() => {
    setNavSecondaryTexts({
      menuToggleText: props.navSecondaryMenuTrigger
    });
  }, [props.navSecondaryMenuTrigger]);

  return (
    <div className="app-body">
     <Helmet>
      <meta name="description" content={props.seoMetaDescription || 'Boston Scientific Anatomy Design System website'} />
     </Helmet>
    { (props.navSecondaryItems && props.navSecondaryMenuTrigger) &&
      <NavSecondary
        texts={navSecondaryTexts}
        navItems={props.navSecondaryItems} />
    }
      <main id="mainContent">
        <div className="page-header">
          <div className="metadata">
            <h1 className="title">{ props.name }</h1>
            <dl className="datestamp">
              <dt>Last Updated:</dt>
              <dd>{ props.lastUpdated ? new Date(props.lastUpdated).toLocaleDateString() : 'Draft' }</dd>
            </dl>
          </div>
          <Markdown markdown={ props.leadParagraph } className="body-assertive" />
        </div>
        <NavTertiary navTertiaryItems={ props.navTertiaryItems } />
        <div className="page-content">
          { props.children }
        </div>
      </main>
    </div>
  );
}

export default PageTemplate;