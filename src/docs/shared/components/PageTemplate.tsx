import { ReactNode, useEffect, useState } from 'react';
import Markdown from './Markdown';
import NavSecondary, { NavItemSecondary } from '../../../library/components/navigation/navSecondary/NavSecondary';
import NavTertiary, { NavItemTertiary } from '../../../library/components/navigation/NavTertiary';
import { Helmet } from 'react-helmet';

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
  const [seoMetaDescriptionValue, setSeoMetaDescriptionValue] = useState<string | undefined>();

  useEffect(() => {
    setNavSecondaryTexts({
      menuToggleText: props.navSecondaryMenuTrigger
    });
  }, [props.navSecondaryMenuTrigger]);

  useEffect(() => {
    if (props.seoMetaDescription.length > 0) {
      setSeoMetaDescriptionValue(props.seoMetaDescription);
    } else if (props.seoMetaDescription.length === 0) {
      setSeoMetaDescriptionValue(props.leadParagraph);
    } else {
      setSeoMetaDescriptionValue('Boston Scientific Anatomy Design System website');
    }
  }, [props.leadParagraph, props.seoMetaDescription]);

  return (
    <div className="docs-body">
      <Helmet>
        <meta name="description" content={seoMetaDescriptionValue} />
      </Helmet>
      {!!(props.navSecondaryItems && props.navSecondaryMenuTrigger) && (
        <NavSecondary texts={navSecondaryTexts} navItems={props.navSecondaryItems} />
      )}
      <main id="mainContent">
        <div className="docs-page-header">
          <div className="docs-metadata">
            <h1 className="docs-title">{props.name}</h1>
            {!!props.lastUpdated && (
              <dl className="docs-datestamp">
                <dt>Last Updated:</dt>
                <dd>{props.lastUpdated ? new Date(props.lastUpdated).toLocaleDateString() : 'Draft'}</dd>
              </dl>
            )}
          </div>
          {!!props.leadParagraph && <Markdown markdown={props.leadParagraph} className="bsds-body-assertive" />}
        </div>
        {!!props.navTertiaryItems && <NavTertiary navTertiaryItems={props.navTertiaryItems} />}
        <div className="docs-page-content">{props.children}</div>
      </main>
    </div>
  );
};

export default PageTemplate;
