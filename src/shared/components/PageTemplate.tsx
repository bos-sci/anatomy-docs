import { ReactNode, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Markdown from 'shared/components/Markdown';
import { NavSecondary, NavItemSecondary } from '@boston-scientific/anatomy-react';
import { NavTertiary, NavItemTertiary } from '@boston-scientific/anatomy-react';
import { Link } from '@boston-scientific/anatomy-react';
import { toStorybookLink } from 'shared/helpers';
import storybookEnv from '../../pages/components/storybookEnv';

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
  const location = useLocation();

  const [navSecondaryTexts, setNavSecondaryTexts] = useState({});
  const [seoMetaDescriptionValue, setSeoMetaDescriptionValue] = useState<string | undefined>();
  const [storybookUrl, setStorybookUrl] = useState('');

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

  useEffect(() => {
    if (props.navSecondaryMenuTrigger === 'Components') {
      const fetchStorybookComponent = async () => {
        try {
          const apiUrl =
            process.env.REACT_APP_DEVELOPMENT_MODE === 'production'
              ? storybookEnv.production
              : storybookEnv.development;

          setStorybookUrl(`${apiUrl}?path=/docs/components-`);
        } catch (error) {
          return '';
        }
      };
      fetchStorybookComponent();
    }
  }, [props.navSecondaryMenuTrigger, storybookUrl]);

  return (
    <div className="docs-body">
      <Helmet>
        <meta name="description" content={seoMetaDescriptionValue} />
      </Helmet>
      {!!(props.navSecondaryItems && props.navSecondaryMenuTrigger) && (
        <NavSecondary texts={navSecondaryTexts} navItems={props.navSecondaryItems} location={location} />
      )}
      <main id="mainContent">
        <div className="docs-page-header">
          <div className="docs-metadata">
            <h1 className="docs-title">{props.name}</h1>
            {!!props.lastUpdated && (
              <dl className="docs-datestamp">
                <dt>Last updated:</dt>
                <dd>{props.lastUpdated ? new Date(props.lastUpdated).toLocaleDateString() : 'Draft'}</dd>
              </dl>
            )}
          </div>
          {!!props.leadParagraph && <Markdown markdown={props.leadParagraph} className="bsds-body-assertive" />}
          {/* Storybook Link */}
          {(storybookUrl && (
            <Link className="docs-storybook-link" href={toStorybookLink(`${storybookUrl}${props.name}--docs`)}>
              View in Storybook
            </Link>
          )) ||
            false}
        </div>
        {!!props.navTertiaryItems && <NavTertiary navTertiaryItems={props.navTertiaryItems} />}
        <div className="docs-page-content">{props.children}</div>
      </main>
    </div>
  );
};

export default PageTemplate;
