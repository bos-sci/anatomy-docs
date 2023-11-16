import { useState, useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { NavItemSecondary } from '@boston-scientific/anatomy-react';
import { NavItemTertiary } from '@boston-scientific/anatomy-react';
import { IdLookupContext } from 'App';
import Markdown from 'shared/components/Markdown';
import { IdLookup } from 'shared/types/docs';
import { GetResourceQuery, useGetResourceQuery } from 'shared/types/contentful';
import useTitle from 'shared/hooks/useTitle';
import useHashScroll from 'shared/hooks/useHashScroll';
import useHeadings from 'shared/hooks/useHeadings';
import PageTemplate from 'shared/components/PageTemplate';
import Layout from 'shared/components/Layout';

const Resources = (): JSX.Element => {
  const params = useParams();
  const location = useLocation();
  const idLookup: IdLookup = useContext(IdLookupContext);
  const [navItems, setNavItems] = useState<NavItemSecondary[]>([] as NavItemSecondary[]);
  const [resourceData, setResourceData] = useState<GetResourceQuery['resource']>({} as GetResourceQuery['resource']);
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

  const { data, error } = useGetResourceQuery({
    variables: {
      id: idLookup.resources[params?.resourceName ?? ''].id,
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
  }, [data]);

  useEffect(() => {
    // TODO: ADS-380 get rid of .replace()
    const basePath = location.pathname.slice(0, location.pathname.lastIndexOf('/')).replace('/designers', '');
    setNavItems([
      {
        text: 'About Anatomy',
        to: basePath + '/about-anatomy'
      },
      {
        text: 'Accessibility statement',
        to: basePath + '/accessibility-statement'
      },
      {
        text: 'Community',
        to: basePath + '/community'
      },
      {
        text: 'Contributing',
        to: basePath + '/contributing'
      },
      {
        text: 'Designers',
        children: [
          {
            text: 'App design guidelines',
            to: basePath + '/designers/app-design-guidelines'
          },
          {
            text: 'Libraries',
            to: basePath + '/designers/libraries'
          },
          {
            text: 'Icon guidelines',
            to: basePath + '/designers/icon-guidelines'
          },
          {
            text: 'Tools and links',
            to: basePath + '/designers/tools-and-links'
          }
        ]
      },
      {
        text: 'Developers',
        to: basePath + '/developers'
      },
      {
        text: 'SEO',
        to: basePath + '/seo'
      },
      {
        text: 'Release notes',
        to: basePath + '/release-notes'
      }
    ]);
  }, [location]);

  useTitle({ titlePrefix: `${resourceData?.name} - Resources` });
  useHashScroll(!!resourceData?.content);

  const pageHeadings = useHeadings();
  useEffect(() => {
    if (pageHeadings.length > 0) {
      setHeadings(pageHeadings);
    }
  }, [pageHeadings]);

  return (
    <Layout>
      <PageTemplate
        name={resourceData?.name || ''}
        lastUpdated={resourceData?.sys?.publishedAt || ''}
        leadParagraph={resourceData?.leadParagraph || ''}
        seoMetaDescription={resourceData?.pageProperties?.seoMetaDescription || ''}
        navSecondaryMenuTrigger="Resources"
        navSecondaryItems={navItems}
        navTertiaryItems={headings}
      >
        <Markdown
          markdown={resourceData?.content || ''}
          headingOffset={1}
          className={resourceData?.name === 'Release notes' ? 'docs-table-align-top' : ''}
        />
      </PageTemplate>
    </Layout>
  );
};

export default Resources;
