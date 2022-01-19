import { useState, useEffect, useContext } from 'react';
import Preview from './variants/Preview';
import NavSecondary, { NavItem } from '../shared/components/navSecondary/NavSecondary';
import NavTertiary, { NavItemTertiary } from '../shared/components/navTertiary/NavTertiary';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/components/pageHeader/PageHeader';
import Markdown from '../shared/components/Markdown';
import { match } from 'react-router';
import { IdLookup } from '../shared/types/docs';
import { Component, useGetComponentQuery } from '../shared/types/contentful';
import './Components.scss';
import useTitle from '../shared/hooks/useTitle';
import useHashScroll from '../shared/hooks/useHashScroll';
import useHeadings from '../shared/hooks/useHeadings';

interface ComponentMatch extends match {
  params: {
    componentName: string;
  }
}

interface Props {
  match: ComponentMatch;
}

const Components = (props: Props): JSX.Element => {
  const componentName = props.match.params.componentName;
  const idLookup: IdLookup = useContext(IdLookupContext);
  const [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  const [componentData, setComponentData] = useState<Component>({} as Component);
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

  const {data, error} = useGetComponentQuery({
    variables: {
      id: idLookup.components[componentName].id,
      preview: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true'
    }
  });

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    if(data?.component) {
      setComponentData(data.component as Component);
      const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
      const navItems = Object.keys(idLookup.components).map(entry => ({
        text: idLookup.components[entry].name,
        slug: basePath + '/' + entry
      }));
      setNavItems(navItems);
    }
  }, [data, idLookup, props.match.path]);

  const nameForTitle = (componentData.name || '')
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  useTitle({titlePrefix: `${nameForTitle} - Components`});
  useHashScroll(!!componentData);

  const pageHeadings = useHeadings(componentData.name);
  useEffect(() => {
    if (componentData.name) {
      setHeadings(pageHeadings.map(heading => {
        return {
          id: heading.id as string,
          text: heading.textContent as string
        };
      }));
    }
  }, [componentData.name, pageHeadings]);

  return (
    <div className="app-content">
      <NavSecondary navItems={ navItems } />
      <main>
        <div className="intro">
          <PageHeader name={ componentData?.name as string } publishedAt={ componentData?.sys?.publishedAt } />
          <Markdown markdown={ componentData.leadParagraph || '' } className="body-assertive" />
        </div>
        <NavTertiary navTertiaryItems={ headings } />
        <div className="page-content">
          <Preview component={ componentName } variant='Default' />
          {(componentData?.modifiersCollection?.items && componentData.modifiersCollection.items.length > 0) && <>
            <h2 id="modifiers">Modifiers</h2>
              { componentData.modifiersCollection.items.map((modifier) => (
                <div key={ modifier?.modifierId } className="component-variant">
                  <h3>{ modifier?.name }</h3>
                  <Markdown markdown={modifier?.description || ''} />
                  <Preview component={ componentName } variant={ modifier?.name as string } variantId={modifier?.modifierId || ''} isDarkTheme={ modifier?.isPreviewDarkThemed || false } />
                </div>
              ))}
            </>
          }

          {(componentData?.stylesCollection?.items && componentData.stylesCollection.items.length > 0) && <>
            <h2 id="styles">Styles</h2>
              { componentData.stylesCollection.items.map((style) => (
                <div key={ style?.styleId } className="component-variant">
                  <h3>{ style?.name }</h3>
                  <Markdown markdown={style?.description || ''} />
                  <Preview component={ componentName } variant={ style?.name as string } variantId={style?.styleId || ''} isDarkTheme={ style?.isPreviewDarkThemed || false } />
                </div>
              ))}
            </>
          }

          {(componentData?.statesCollection?.items && componentData.statesCollection.items.length > 0) && <>
            <h2 id="states">States</h2>
              { componentData.statesCollection.items.map((state) => (
                <div key={ state?.stateId } className="component-variant">
                  <h3>{ state?.name }</h3>
                  <Markdown markdown={state?.description || ''} />
                  <Preview component={ componentName } variant={ state?.name as string } variantId={state?.stateId || ''} isDarkTheme={ state?.isPreviewDarkThemed || false } />
                </div>
              ))}
            </>
          }

          {(componentData.usage
            || componentData.usageDo
            || componentData.usageDont) &&
            <h2 id="usage">Usage</h2>
          }
          { componentData.usage && <Markdown markdown={ componentData.usage } />}
          {(componentData.usageDo || componentData.usageDont) &&
            <div className="component-lists">
              <div className="component-list-block">
                <h3>Do:</h3>
                <Markdown markdown={componentData.usageDo as string} />
              </div>
              <div className="component-list-block">
                <h3>Don't:</h3>
                <Markdown markdown={componentData.usageDont as string} />
              </div>
            </div>
          }
          {componentData.interactions && <>
            <h2 id="interactions">Interactions</h2>
            <Markdown markdown={ componentData.interactions } headingOffset={ 2 } />
          </>}
          {(componentData.contentGuidelines
            || componentData.contentGuidelinesDo
            || componentData.contentGuidelinesDont) &&
            <h2 id="content-guidelines">Content guidelines</h2>
          }
          { componentData.contentGuidelines && <Markdown markdown={ componentData.contentGuidelines } />}
          {(componentData.contentGuidelinesDo || componentData.contentGuidelinesDont) &&
            <div className="component-lists">
              <div className="component-list-block">
                <h3>Do:</h3>
                <Markdown markdown={componentData.contentGuidelinesDo as string} />
              </div>
              <div className="component-list-block">
                <h3>Don't:</h3>
                <Markdown markdown={componentData.contentGuidelinesDont as string} />
              </div>
            </div>
          }
          {componentData.userResearch && <>
            <h2 id="user-research">User research</h2>
            <Markdown markdown={ componentData.userResearch } headingOffset={ 2 } />
          </>}
          {componentData.accessibility && <>
            <h2 id="accessibility">Accessibility</h2>
            <Markdown markdown={ componentData.accessibility } headingOffset={ 2 } />
          </>}
        </div>
      </main>
  </div>);
}

export default Components;