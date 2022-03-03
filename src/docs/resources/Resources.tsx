import { useState, useEffect, useContext } from 'react';
import { NavItemSecondary } from '../../library/components/navSecondary/NavSecondary';
import { NavItemTertiary } from '../../library/components/navTertiary/NavTertiary';
import { IdLookupContext } from '../App';
import Markdown from '../shared/components/Markdown';
import { match } from 'react-router';
import { GetResourceQuery, useGetResourceQuery } from '../shared/types/contentful';
import { IdLookup } from '../shared/types/docs';
import useTitle from '../shared/hooks/useTitle';
import useHashScroll from '../shared/hooks/useHashScroll';
import useHeadings from '../shared/hooks/useHeadings';
import PageTemplate from '../shared/components/pageTemplate/PageTemplate';
import Layout from '../shared/components/Layout';

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
  const [navItems, setNavItems] = useState<NavItemSecondary[]>([] as NavItemSecondary[]);
  const [resourceData, setResourceData] = useState<GetResourceQuery['resource']>({} as GetResourceQuery['resource']);
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

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
      setResourceData(data.resource);
    }
    const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
    const pathPrefix = basePath + '/';
    const navItems = [
      {
        text: 'Community',
        slug: pathPrefix + 'community'
      },
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
      {
        text: 'Release notes',
        slug: pathPrefix + 'release-notes'
      }
    ];
    setNavItems(navItems);
  }, [data, idLookup, props.match.path]);

  useTitle({titlePrefix: `${resourceData?.name} - Resources`});
  useHashScroll(!!resourceData?.content);

  const pageHeadings = useHeadings(resourceData?.name);
  useEffect(() => {
    if (resourceData?.name) {
      setHeadings(pageHeadings.map(heading => {
        return {
          id: heading.id as string,
          text: heading.textContent as string
        };
      }));
    }
  }, [resourceData?.name, pageHeadings]);

  return (
    <Layout>
      <PageTemplate
        name={resourceData?.name || ''}
        lastUpdated={resourceData?.sys?.publishedAt}
        leadParagraph={resourceData?.leadParagraph || ''}
        navSecondaryMenuTrigger="Resources"
        navSecondaryItems={navItems}
        navTertiaryItems={headings}>
        <Markdown
          markdown={resourceData?.content || ''}
          headingOffset={1}
          className={resourceData?.name === 'Release notes' ? 'table-align-top' : ''} />
      </PageTemplate>
    </Layout>
  );
}

export default Resources;