import { useState, useEffect, useContext } from 'react';
import NavSecondary, { NavItem } from '../shared/navSecondary/NavSecondary';
import useContentful from '../../hooks/useContentful';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/pageHeader/PageHeader';
import Markdown from '../shared/Markdown';
import { match } from 'react-router';
import { Resource } from '../../types/contentful';
import { IdLookup } from '../../types/docs';

interface ComponentMatch extends match {
  params: {
    resourceName: string;
  }
}

interface Props {
  match: ComponentMatch;
}

interface ContentfulData {
  response?: {
    resource: Resource;
  };
  error?: any
}

const Resources = (props:  Props): JSX.Element => {
  const resourceName = props.match.params.resourceName;
  let [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  let [resourceData, setResourceData] = useState<Resource>({} as Resource);

  const idLookup: IdLookup = useContext(IdLookupContext);

  const query = `
    query ResourceData($id: String!) {
      resource(id: $id, preview: ${process.env.REACT_APP_CONTENTFUL_PREVIEW}) {
        name
        description
        content
        sys {
          id
          publishedAt
        }
      }
    }`;

  const queryVariables = {
    id: idLookup.resources[resourceName].id
  };

  const data: ContentfulData = useContentful(query, queryVariables);
  if (data.error) console.error(data.error);

  useEffect(() => {
    if (data.response) {
      setResourceData(data.response.resource);
    }
    const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
    const pathPrefix = basePath + '/';
    const navItems = [
      {
        text: 'Designers',
        slug: pathPrefix + 'designers'
      },
      {
        text: 'Developers',
        slug: pathPrefix + 'developers'
      },
    ];
    setNavItems(navItems);
  }, [data.response, idLookup, props.match.path]);

  return (
    <div className="app-content">
      { navItems && <NavSecondary navItems={ navItems } /> }
        <main>
          {resourceData.sys && <>
            <PageHeader name={ resourceData.name || '' } publishedAt={ resourceData.sys.publishedAt } />
            <Markdown markdown={ resourceData.description || ''} className="body-assertive" />
            <Markdown markdown={ resourceData.content || ''}  headingOffset={1} />
          </>}
        </main>
    </div>
  );
}

export default Resources;