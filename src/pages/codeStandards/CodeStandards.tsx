import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NavItemTertiary } from '@boston-scientific/anatomy-react';
import { IdLookupContext } from 'App';
import Markdown from 'shared/components/Markdown';
import { GetCodeStandardQuery, useGetCodeStandardQuery } from 'shared/types/contentful';
import { IdLookup } from 'shared/types/docs';
import useTitle from 'shared/hooks/useTitle';
import useHashScroll from 'shared/hooks/useHashScroll';
import useHeadings from 'shared/hooks/useHeadings';
import PageTemplate from 'shared/components/PageTemplate';
import Layout from 'shared/components/Layout';
import useNavItems from 'shared/hooks/useNavItems';

const CodeStandards = (): JSX.Element => {
  const params = useParams();
  const [codeStandardData, setCodeStandardData] = useState<GetCodeStandardQuery['codeStandard']>(
    {} as GetCodeStandardQuery['codeStandard']
  );
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

  const idLookup: IdLookup = useContext(IdLookupContext);

  const { data, error } = useGetCodeStandardQuery({
    variables: {
      id: idLookup.codeStandards[params?.standardName ?? ''].id,
      preview: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true'
    }
  });

  if (error) {
    console.error(error);
  }

  const navItems = useNavItems(idLookup.codeStandards, 'code-standards');

  useEffect(() => {
    if (data?.codeStandard) {
      setCodeStandardData(data.codeStandard);
    }
  }, [data]);

  useTitle({ titlePrefix: `${codeStandardData?.name} - Code Standards` });
  useHashScroll(!!codeStandardData?.content);

  const pageHeadings = useHeadings();
  useEffect(() => {
    if (pageHeadings.length > 0) {
      setHeadings(pageHeadings);
    }
  }, [pageHeadings]);

  return (
    <Layout>
      <PageTemplate
        name={codeStandardData?.name || ''}
        lastUpdated={codeStandardData?.sys?.publishedAt || ''}
        leadParagraph={codeStandardData?.leadParagraph || ''}
        seoMetaDescription={codeStandardData?.pageProperties?.seoMetaDescription || ''}
        navSecondaryMenuTrigger="Code standards"
        navSecondaryItems={navItems}
        navTertiaryItems={headings}
      >
        <Markdown markdown={codeStandardData?.content || ''} />
      </PageTemplate>
    </Layout>
  );
};

export default CodeStandards;
