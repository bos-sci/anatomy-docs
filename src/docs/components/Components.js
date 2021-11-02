import { useState, useEffect, useContext } from 'react';
import Preview from './Preview';
import NavSecondary from '../shared/navSecondary/NavSecondary';
import useContentful from '../../hooks/useContentful';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/pageHeader/PageHeader';
import Lists from './Lists';
import Markdown from '../shared/Markdown';

const Components = (props) => {
  const component = props.match.params.component;
  const idLookup = useContext(IdLookupContext);
  let [navItems, setNavItems] = useState(null);
  let [componentData, setComponentData] = useState(null);

  const query = `
    query ComponentData($id: String!) {
      component(id: $id) {
        name
        description
        variantsCollection {
          items {
            name
            description
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
    id: idLookup.components[component].id
  };

  const data = useContentful(query, queryVariables);
  if (data.error) console.error(data.error);

  const doDontlistBuilder = (doList, dontList) => {
    const list = {};
    if (doList) list['Do'] = doList;
    if (dontList) list['Don\'t'] = dontList;
    return list;
  }

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
      <aside className="aside-nav">
      { navItems && <NavSecondary navItems={ navItems } /> }
      </aside>
      <main>
        { componentData &&
          <>
            <PageHeader name={ componentData.name } publishedAt={ componentData.sys.publishedAt } />
            <Markdown markdown={ componentData.description } />
            {componentData.variantsCollection.items.length > 0 ? <>
              <h2>Variants</h2>
                { componentData.variantsCollection.items.map(variant => (
                  <div key={ variant.name } className="component-variant">
                    <h3>{ variant.name }</h3>
                    <p>{ variant.description }</p>
                    <div className="demo-example">
                      <Preview component={ component } variant={ variant.name } />
                    </div>
                  </div>
                ))}
              </> : (
                <div className="demo-example">
                  <Preview component={ component } variant='Default' />
                </div>
              )
            }
            {(componentData.usage
              || componentData.usageDo
              || componentData.usageDont) &&
              <h2>Usage</h2>
            }
            { componentData.usage && <Markdown markdown={ componentData.usage } />}
            {(componentData.usageDo || componentData.usageDont) &&
              <Lists name="usage" lists={ doDontlistBuilder(componentData.usageDo, componentData.usageDont) } />
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
              <Lists
                name="contentGuidelines"
                lists={ doDontlistBuilder(componentData.contentGuidelinesDo, componentData.contentGuidelinesDont) } />
            }
            {componentData.userResearch && <>
              <h2>User Research</h2>
              <Markdown markdown={ componentData.userResearch } headingOffset={ 2 } />
            </>}
            {componentData.accessibility && <>
              <h2>Accessibility</h2>
              <Markdown markdown={ componentData.accessibility } headingOffset={ 2 } />
            </>}
          </>
        }
      </main>
  </div>);
}

export default Components;