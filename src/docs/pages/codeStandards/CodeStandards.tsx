import { useState, useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { NavItemSecondary } from 'library/components/navigation/navSecondary/NavSecondary';
import { NavItemTertiary } from 'library/components/navigation/NavTertiary';
import { IdLookupContext } from 'docs/App';
import Markdown from 'docs/shared/components/Markdown';
import { GetCodeStandardQuery, useGetCodeStandardQuery } from 'docs/shared/types/contentful';
import { IdLookup } from 'docs/shared/types/docs';
import useTitle from 'docs/shared/hooks/useTitle';
import useHashScroll from 'docs/shared/hooks/useHashScroll';
import useHeadings from 'docs/shared/hooks/useHeadings';
import PageTemplate from 'docs/shared/components/PageTemplate';
import Layout from 'docs/shared/components/Layout';

const CodeStandards = (): JSX.Element => {
  const location = useLocation();
  const params = useParams();
  const [navItems, setNavItems] = useState<NavItemSecondary[]>([] as NavItemSecondary[]);
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

  useEffect(() => {
    if (data?.codeStandard) {
      setCodeStandardData(data.codeStandard);
    }
    const basePath = location.pathname.slice(0, location.pathname.lastIndexOf('/'));
    const pathPrefix = basePath + '/';
    const navItems = [
      {
        text: 'General',
        to: pathPrefix + 'general'
      },
      {
        text: 'Accessibility',
        to: pathPrefix + 'accessibility'
      },
      {
        text: 'HTML',
        to: pathPrefix + 'html'
      },
      {
        text: 'CSS',
        to: pathPrefix + 'css'
      },
      {
        text: 'JavaScript',
        to: pathPrefix + 'javascript'
      },
      {
        text: 'DevOps',
        to: pathPrefix + 'devops'
      },
      {
        text: 'Automated code quality tools',
        to: pathPrefix + 'automated-code-quality-tools'
      }
    ];
    setNavItems(navItems);
  }, [data, idLookup, location]);

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
