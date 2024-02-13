import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
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
import useNavItems from 'shared/hooks/useNavItems';

const Resources = (): JSX.Element => {
  const params = useParams();
  const idLookup: IdLookup = useContext(IdLookupContext);
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

  const navItems = useNavItems(idLookup.resources, 'resources');

  useEffect(() => {
    if (data?.resource) {
      setResourceData(data.resource);
    }
  }, [data]);

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
