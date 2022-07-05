import { useState, useEffect, useContext } from 'react';
import { NavItemSecondary } from '../../library/components/navigation/navSecondary/NavSecondary';
import { NavItemTertiary } from '../../library/components/navigation/navTertiary/NavTertiary';
import { IdLookupContext } from '../App';
import Markdown from '../shared/components/Markdown';
import { match } from 'react-router';
import { IdLookup } from '../shared/types/docs';
import { GetResourceQuery, useGetResourceQuery } from '../shared/types/contentful';
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
  const idLookup: IdLookup = useContext(IdLookupContext);
  const [navItems, setNavItems] = useState<NavItemSecondary[]>([] as NavItemSecondary[]);
  const [resourceData, setResourceData] = useState<GetResourceQuery['resource']>({} as GetResourceQuery['resource']);
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

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
    if(data?.resource) {
      setResourceData(data.resource);
    }
  }, [data]);

  useEffect(() => {
    const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/')).replace('/designers', '');
    setNavItems([
      {
        text: 'Community',
        slug: basePath + '/community'
      },
      {
        text: 'Designers',
        children: [
          {
            text: 'Libraries',
            slug: basePath + '/designers/libraries'
          },
          {
            text: 'Icon guidelines',
            slug: basePath + '/designers/icon-guidelines'
          },
          {
            text: 'Tools and links',
            slug: basePath + '/designers/tools-and-links'
          }
        ]
      },
      {
        text: 'Developers',
        slug: basePath + '/developers'
      },
      {
        text: 'SEO',
        slug: basePath + '/seo'
      },
      {
        text: 'Release notes',
        slug: basePath + '/release-notes'
      },
    ]);
  }, [props.match.path]);

  useTitle({titlePrefix: `${resourceData?.name} - Resources`});
  useHashScroll(!!resourceData?.content);

  const pageHeadings = useHeadings();
  useEffect(() => {
    if (pageHeadings.length > 0) {
      setHeadings(pageHeadings.map(heading => {
        return {
          id: heading.id as string,
          text: heading.textContent as string
        };
      }));
    }
  }, [pageHeadings]);

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