import { ReactNode, useEffect, useState } from 'react';
import Markdown from './Markdown';
import NavSecondary, { NavItemSecondary } from '../../../library/components/navigation/navSecondary/NavSecondary';
import NavTertiary, { NavItemTertiary } from '../../../library/components/navigation/navTertiary/NavTertiary';
import { Helmet } from 'react-helmet'

interface Props {
  name: string;
  lastUpdated?: string;
  leadParagraph?: string;
  seoMetaDescription: string;
  navSecondaryItems?: NavItemSecondary[];
  navSecondaryMenuTrigger?: string;
  navTertiaryItems?: NavItemTertiary[];
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
    <div className="docs-body">
     <Helmet>
      <meta name="description" content={props.seoMetaDescription.length > 0 ? props.seoMetaDescription : props.seoMetaDescription.length === 0 ? props.leadParagraph : "Boston Scientific Anatomy Design System website"} />
     </Helmet>
    { (props.navSecondaryItems && props.navSecondaryMenuTrigger) &&
      <NavSecondary
        texts={navSecondaryTexts}
        navItems={props.navSecondaryItems} />
    }
      <main id="mainContent">
        <div className="docs-page-header">
          <div className="docs-metadata">
            <h1 className="docs-title">{ props.name }</h1>
            {props.lastUpdated &&
              <dl className="docs-datestamp">
                <dt>Last Updated:</dt>
                <dd>{ props.lastUpdated ? new Date(props.lastUpdated).toLocaleDateString() : 'Draft' }</dd>
              </dl>
            }
          </div>
          {props.leadParagraph && <Markdown markdown={ props.leadParagraph } className="bsds-body-assertive" /> }
        </div>
        {props.navTertiaryItems && <NavTertiary navTertiaryItems={ props.navTertiaryItems } />}
        <div className="docs-page-content">
          { props.children }
        </div>
      </main>
    </div>
  );
}

export default PageTemplate;