import { useState, useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { NavItemTertiary } from '@boston-scientific/anatomy-react';
import { IdLookupContext } from 'App';
import Markdown from 'shared/components/Markdown';
import { GetContentGuidelineQuery, useGetContentGuidelineQuery } from 'shared/types/contentful';
import { IdLookup } from 'shared/types/docs';
import useTitle from 'shared/hooks/useTitle';
import useHashScroll from 'shared/hooks/useHashScroll';
import useHeadings from 'shared/hooks/useHeadings';
import PageTemplate from 'shared/components/PageTemplate';
import Layout from 'shared/components/Layout';
import useNavItems from 'shared/hooks/useNavItems';

const ContentGuidelines = (): JSX.Element => {
  const params = useParams();
  const location = useLocation();
  const [contentGuidelineData, setContentGuidelineData] = useState<GetContentGuidelineQuery['contentGuideline']>(
    {} as GetContentGuidelineQuery['contentGuideline']
  );
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

  const idLookup: IdLookup = useContext(IdLookupContext);

  const { data, error } = useGetContentGuidelineQuery({
    variables: {
      id: idLookup.contentGuidelines[params?.contentName ?? ''].id,
      preview: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true'
    }
  });

  if (error) {
    console.error(error);
  }

  const navItems = useNavItems(idLookup.contentGuidelines, 'content');

  useEffect(() => {
    if (data?.contentGuideline) {
      setContentGuidelineData(data.contentGuideline);
    }
  }, [data, idLookup, location]);

  useTitle({ titlePrefix: `${contentGuidelineData?.name} - Content` });
  useHashScroll(!!contentGuidelineData?.content);

  const pageHeadings = useHeadings();
  useEffect(() => {
    if (pageHeadings.length > 0) {
      setHeadings(pageHeadings);
    }
  }, [pageHeadings]);

  return (
    <Layout>
      <PageTemplate
        name={contentGuidelineData?.name || ''}
        lastUpdated={contentGuidelineData?.sys?.publishedAt || ''}
        leadParagraph={contentGuidelineData?.leadParagraph || ''}
        seoMetaDescription={contentGuidelineData?.pageProperties?.seoMetaDescription || ''}
        navSecondaryMenuTrigger="Content"
        navSecondaryItems={navItems}
        navTertiaryItems={headings}
      >
        <Markdown markdown={contentGuidelineData?.content || ''} headingOffset={1} />
      </PageTemplate>
    </Layout>
  );
};

export default ContentGuidelines;
