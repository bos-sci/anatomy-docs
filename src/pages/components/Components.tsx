import { useState, useEffect, useContext, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { NavItemSecondary } from '@boston-scientific/anatomy-react';
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
import { Link } from '@boston-scientific/anatomy-react';

import axios from 'axios';
import storybookLinkConfig from './storybookLinkConfig';

const Components = (): JSX.Element => {
  const location = useLocation();

  const [navItems, setNavItems] = useState<NavItemSecondary[]>([] as NavItemSecondary[]);
  const [componentData, setComponentData] = useState<GetComponentQuery['component']>(
    {} as GetComponentQuery['component']
  );
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);
  const [storybookComponent, setStorybookComponent] = useState('');

  const data = useContext(ComponentContext);

  useEffect(() => {
    if (data) {
      setComponentData(data);
    }
  }, [data]);

  useEffect(() => {
    // TODO: ADS-380 get rid of .replace()
    const basePath = location.pathname
      .slice(0, location.pathname.lastIndexOf('/'))
      .replace('/form-controls', '')
      .replace('/navigation', '')
      .replace('/cards', '');
    setNavItems([
      {
        text: 'Accordion',
        to: basePath + '/accordion'
      },
      {
        text: 'Button',
        to: basePath + '/button'
      },
      {
        text: 'Cards',
        children: [
          {
            text: 'Content card',
            to: basePath + '/cards/content-card'
          },
          {
            text: 'Card group',
            to: basePath + '/cards/card-group'
          },
          {
            text: 'Product card',
            to: basePath + '/cards/product-card'
          }
        ]
      },
      {
        text: 'Dropdown menu',
        to: basePath + '/dropdown-menu'
      },
      {
        text: 'Form controls',
        children: [
          {
            text: 'Form',
            to: basePath + '/form-controls/form'
          },
          {
            text: 'Fieldset',
            to: basePath + '/form-controls/fieldset'
          },
          {
            text: 'Checkbox',
            to: basePath + '/form-controls/checkbox'
          },
          {
            text: 'Checkbox group',
            to: basePath + '/form-controls/checkbox-group'
          },
          {
            text: 'Radio group',
            to: basePath + '/form-controls/radio-group'
          },
          {
            text: 'Select',
            to: basePath + '/form-controls/select'
          },
          {
            text: 'Text input',
            to: basePath + '/form-controls/text-input'
          },
          {
            text: 'Textarea',
            to: basePath + '/form-controls/textarea'
          }
        ]
      },
      {
        text: 'Image',
        to: basePath + '/image'
      },
      {
        text: 'Link',
        to: basePath + '/link'
      },
      {
        text: 'Modal',
        to: basePath + '/modal'
      },
      {
        text: 'Navigation',
        children: [
          {
            text: 'Breadcrumbs',
            to: basePath + '/navigation/breadcrumbs'
          },
          {
            text: 'Primary navigation',
            to: basePath + '/navigation/primary-navigation'
          },
          {
            text: 'Secondary navigation',
            to: basePath + '/navigation/secondary-navigation'
          },
          {
            text: 'Tertiary navigation',
            to: basePath + '/navigation/tertiary-navigation'
          },
          {
            text: 'Wizard navigation',
            to: basePath + '/navigation/wizard-navigation'
          },
          {
            text: 'Search',
            to: basePath + '/navigation/search'
          },
          {
            text: 'Skip link',
            to: basePath + '/navigation/skip-link'
          }
        ]
      },
      {
        text: 'Ribbon',
        to: basePath + '/ribbon'
      },
      {
        text: 'Stoplight',
        to: basePath + '/stoplight'
      },
      {
        text: 'Tabs',
        to: basePath + '/tabs'
      },
      {
        text: 'Tag',
        to: basePath + '/tag'
      }
    ]);
  }, [location]);

  const nameForTitle = componentData?.name || '';

  useTitle({ titlePrefix: `${nameForTitle} - Components` });
  useHashScroll(!!componentData?.name);

  const pageHeadings = useHeadings();
  useEffect(() => {
    if (pageHeadings.length > 0) {
      setHeadings(pageHeadings);
    }
  }, [pageHeadings]);

  useEffect(() => {
    const fetchStorybookComponent = async () => {
      try {
        const apiUrl =
          process.env.NODE_ENV === 'production' ? storybookLinkConfig.production : storybookLinkConfig.development;

        await axios.get(`${apiUrl}`);
        setStorybookComponent(`${apiUrl}?path=/docs/components-`);
        console.log(storybookComponent);
      } catch (error) {
        return '';
      }
    };
    fetchStorybookComponent();
  }, [storybookComponent]);

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
          {/* Storybook Link */}
          {(componentData.storybookLink && storybookComponent !== '' && (
            <Link className="docs-storybook-link" href={`${storybookComponent}${componentData?.name}--docs`}>
              View in Storybook
            </Link>
          )) ||
            false}

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
