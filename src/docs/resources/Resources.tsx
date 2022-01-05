import { useState, useEffect, useContext } from 'react';
import NavSecondary, { NavItem } from '../shared/navSecondary/NavSecondary';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/pageHeader/PageHeader';
import Markdown from '../shared/Markdown';
import { match } from 'react-router';
import { Resource, useGetResourceQuery } from '../../types/contentful';
import { IdLookup } from '../../types/docs';

interface ComponentMatch extends match {
  params: {
    resourceName: string;
  }
}

interface Props {
  match: ComponentMatch;
}

const Resources = (props:  Props): JSX.Element => {
  const resourceName = props.match.params.resourceName;
  let [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  let [resourceData, setResourceData] = useState<Resource>({} as Resource);

  const idLookup: IdLookup = useContext(IdLookupContext);

  const {data, error} = useGetResourceQuery({
    variables: {
      id: idLookup.resources[resourceName].id,
      preview: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true'
    }
  });

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    if (data?.resource) {
      setResourceData(data.resource as Resource);
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
      {
        text: 'SEO',
        slug: pathPrefix + 'seo'
      },
    ];
    setNavItems(navItems);
  }, [data, idLookup, props.match.path]);

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