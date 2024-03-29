import { useState, useEffect, useContext, Fragment } from 'react';
import { NavItemTertiary } from '@boston-scientific/anatomy-react';
import Markdown from 'shared/components/Markdown';
import { GetComponentQuery } from 'shared/types/contentful';
import useTitle from 'shared/hooks/useTitle';
import useHashScroll from 'shared/hooks/useHashScroll';
import useHeadings from 'shared/hooks/useHeadings';
import PageTemplate from 'shared/components/PageTemplate';
import Layout from 'shared/components/Layout';
import { ComponentContext } from './ComponentsController';
import Preview from 'pages/components/variants/Preview';
import { IdLookupContext } from 'App';
import useNavItems from 'shared/hooks/useNavItems';

const Components = (): JSX.Element => {
  const [componentData, setComponentData] = useState<GetComponentQuery['component']>(
    {} as GetComponentQuery['component']
  );
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

  const data = useContext(ComponentContext);
  const idLookup = useContext(IdLookupContext);

  const navItems = useNavItems(idLookup.components, 'components');

  useEffect(() => {
    if (data) {
      setComponentData(data);
    }
  }, [data]);

  const nameForTitle = componentData?.name || '';

  useTitle({ titlePrefix: `${nameForTitle} - Components` });
  useHashScroll(!!componentData?.name);

  const pageHeadings = useHeadings();
  useEffect(() => {
    if (pageHeadings.length > 0) {
      setHeadings(pageHeadings);
    }
  }, [pageHeadings]);

  if (componentData) {
    return (
      <Layout>
        <PageTemplate
          name={componentData?.name || ''}
          lastUpdated={componentData?.sys?.publishedAt || ''}
          leadParagraph={componentData?.leadParagraph || ''}
          seoMetaDescription={componentData?.pageProperties?.seoMetaDescription || ''}
          navSecondaryMenuTrigger="Components"
          navSecondaryItems={navItems}
          navTertiaryItems={headings}
        >
          {/* Default Preview */}
          {!!componentData.name && <Preview shouldLinkToExamples={componentData.shouldLinkToExamples || false} />}

          {/* Modifiers */}
          {!!componentData.modifiersCollection?.items && componentData.modifiersCollection.items.length > 0 && (
            <>
              <h2 id="modifiers">Modifiers</h2>
              {componentData.modifiersCollection.items.map((modifier) => (
                <Fragment key={modifier?.modifierId}>
                  <h3>{modifier?.name}</h3>
                  <Markdown markdown={modifier?.description || ''} />
                  <Preview
                    variant={modifier?.name as string}
                    variantId={modifier?.modifierId as string}
                    shouldLinkToExamples={componentData.shouldLinkToExamples || false}
                  />
                </Fragment>
              ))}
            </>
          )}

          {/* Styles */}
          {!!componentData.stylesCollection?.items && componentData.stylesCollection.items.length > 0 && (
            <>
              <h2 id="styles">Styles</h2>
              {componentData.stylesCollection.items.map((style) => (
                <Fragment key={style?.styleId}>
                  <h3>{style?.name}</h3>
                  <Markdown markdown={style?.description || ''} />
                  <Preview
                    variant={style?.name as string}
                    variantId={style?.styleId as string}
                    shouldLinkToExamples={componentData.shouldLinkToExamples || false}
                  />
                </Fragment>
              ))}
            </>
          )}

          {/* States */}
          {!!componentData.statesCollection?.items && componentData.statesCollection.items.length > 0 && (
            <>
              <h2 id="states">States</h2>
              {componentData.statesCollection.items.map((state) => (
                <Fragment key={state?.stateId}>
                  <h3>{state?.name}</h3>
                  <Markdown markdown={state?.description || ''} />
                  <Preview
                    variant={state?.name as string}
                    variantId={state?.stateId as string}
                    shouldLinkToExamples={componentData.shouldLinkToExamples || false}
                  />
                </Fragment>
              ))}
            </>
          )}

          {!!(componentData.usage || componentData.usageDo || componentData.usageDont) && <h2 id="usage">Usage</h2>}
          {!!componentData.usage && <Markdown markdown={componentData.usage} />}
          {!!(componentData.usageDo || componentData.usageDont) && (
            <div className="docs-list-flex">
              <div className="docs-list-flex-item">
                <h3>Do:</h3>
                <Markdown markdown={componentData.usageDo || ''} />
              </div>
              <div className="docs-list-flex-item">
                <h3>Don&apos;t:</h3>
                <Markdown markdown={componentData.usageDont || ''} />
              </div>
            </div>
          )}
          {!!componentData.interactions && (
            <>
              <h2 id="interactions">Interactions</h2>
              <Markdown markdown={componentData.interactions} headingOffset={2} />
            </>
          )}
          {!!(
            componentData.contentGuidelines ||
            componentData.contentGuidelinesDo ||
            componentData.contentGuidelinesDont
          ) && <h2 id="content-guidelines">Content guidelines</h2>}
          {!!componentData.contentGuidelines && <Markdown markdown={componentData.contentGuidelines} />}
          {!!(componentData.contentGuidelinesDo || componentData.contentGuidelinesDont) && (
            <div className="docs-list-flex">
              <div className="docs-list-flex-item">
                <h3>Do:</h3>
                <Markdown markdown={componentData.contentGuidelinesDo || ''} />
              </div>
              <div className="docs-list-flex-item">
                <h3>Don&apos;t:</h3>
                <Markdown markdown={componentData.contentGuidelinesDont || ''} />
              </div>
            </div>
          )}
          {!!componentData.userResearch && (
            <>
              <h2 id="user-research">User research</h2>
              <Markdown markdown={componentData.userResearch} headingOffset={2} />
            </>
          )}
          {!!componentData.accessibility && (
            <>
              <h2 id="accessibility">Accessibility</h2>
              <Markdown markdown={componentData.accessibility} headingOffset={2} />
            </>
          )}
        </PageTemplate>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <main id="mainContent">Loading...</main>
      </Layout>
    );
  }
};

export default Components;
