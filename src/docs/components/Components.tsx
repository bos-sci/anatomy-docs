import { useState, useEffect, useContext } from 'react';
import Preview from './variations/Preview';
import NavSecondary, { NavItem } from '../shared/navSecondary/NavSecondary';
import useContentful from '../../hooks/useContentful';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/pageHeader/PageHeader';
import Markdown from '../shared/Markdown';
import { match } from 'react-router';
import { IdLookup } from '../../types/docs';
import { Component } from '../../types/contentful';
import './Components.scss';

interface ComponentMatch extends match {
  params: {
    componentName: string;
  }
}

interface Props {
  match: ComponentMatch;
}

interface ContentfulData {
  response?: {
    component: Component;
  };
  error?: any
}

const Components = (props: Props): JSX.Element => {
  const componentName = props.match.params.componentName;
  const idLookup: IdLookup = useContext(IdLookupContext);
  let [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  let [componentData, setComponentData] = useState<Component>({} as Component);

  const query = `
    query ComponentData($id: String!) {
      component(id: $id, preview: ${process.env.REACT_APP_CONTENTFUL_PREVIEW}) {
        name
        description
        variantsCollection {
          items {
            name
            description
            variantId
            isPreviewDarkThemed
          }
        }
        usage
        usageDo
        usageDont
        interactions
        contentGuidelines
        contentGuidelinesDo
        contentGuidelinesDont
        userResearch
        accessibility
        sys {
          id
          publishedAt
        }
      }
    }`;

  const queryVariables = {
    id: idLookup.components[componentName].id
  };

  const data: ContentfulData = useContentful(query, queryVariables);
  if (data.error) console.error(data.error);

  useEffect(() => {
    if(data.response) {
      setComponentData(data.response.component);
      const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
      const navItems = Object.keys(idLookup.components).map(entry => ({
        text: idLookup.components[entry].name,
        slug: basePath + '/' + entry
      }));
      setNavItems(navItems);
    }
  }, [data.response, idLookup, props.match.path]);

  return (
    <div className="app-content">
      <NavSecondary navItems={ navItems } />
      <main>
        <PageHeader name={ componentData?.name as string } publishedAt={ componentData?.sys?.publishedAt } />
        { componentData.description && <Markdown markdown={ componentData.description} /> }
        {(componentData?.variantsCollection?.items && componentData.variantsCollection.items.length > 0) ? <>
          <h2>Variants</h2>
            { componentData.variantsCollection.items.map((variant, i) => (
              <div key={ variant?.name + '' + i } className="component-variant">
                <h3>{ variant?.name }</h3>
                <Markdown markdown={variant?.description || ''} />
                <Preview component={ componentName } variant={ variant?.name as string } variantId={variant?.variantId || ''} isDarkTheme={ variant?.isPreviewDarkThemed || false } />
              </div>
            ))}
          </> : <Preview component={ componentName } variant='Default' />
        }
        {(componentData.usage
          || componentData.usageDo
          || componentData.usageDont) &&
          <h2>Usage</h2>
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
          <h2>Interactions</h2>
          <Markdown markdown={ componentData.interactions } headingOffset={ 2 } />
        </>}
        {(componentData.contentGuidelines
          || componentData.contentGuidelinesDo
          || componentData.contentGuidelinesDont) &&
          <h2>Content Guidelines</h2>
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
          <h2>User Research</h2>
          <Markdown markdown={ componentData.userResearch } headingOffset={ 2 } />
        </>}
        {componentData.accessibility && <>
          <h2>Accessibility</h2>
          <Markdown markdown={ componentData.accessibility } headingOffset={ 2 } />
        </>}
      </main>
  </div>);
}

export default Components;