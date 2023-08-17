import { useState, useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { NavItemSecondary } from '@boston-scientific/anatomy-react';
import { NavItemTertiary } from '@boston-scientific/anatomy-react';
import { IdLookupContext } from 'App';
import Markdown from 'shared/components/Markdown';
import { IdLookup } from 'shared/types/docs';
import { GetFoundationQuery, useGetFoundationQuery } from 'shared/types/contentful';
import useTitle from 'shared/hooks/useTitle';
import useHashScroll from 'shared/hooks/useHashScroll';
import useHeadings from 'shared/hooks/useHeadings';
import PageTemplate from 'shared/components/PageTemplate';
import Layout from 'shared/components/Layout';

const Foundations = (): JSX.Element => {
  const params = useParams();
  const location = useLocation();
  const idLookup: IdLookup = useContext(IdLookupContext);
  const [navItems, setNavItems] = useState<NavItemSecondary[]>([] as NavItemSecondary[]);
  const [foundationData, setFoundationData] = useState<GetFoundationQuery['foundation']>(
    {} as GetFoundationQuery['foundation']
  );
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

  const { data, error } = useGetFoundationQuery({
    variables: {
      id: idLookup.foundations[params?.foundationName ?? ''].id,
      preview: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true'
    }
  });

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    if (data?.foundation) {
      setFoundationData(data.foundation);
    }
  }, [data]);

  useEffect(() => {
    // TODO: ADS-380 get rid of .replace()
    const basePath = location.pathname.slice(0, location.pathname.lastIndexOf('/')).replace('/iconography', '');
    setNavItems([
      {
        text: 'Accessibility',
        to: basePath + '/accessibility'
      },
      {
        text: 'Anti-patterns',
        to: basePath + '/anti-patterns'
      },
      {
        text: 'Color',
        to: basePath + '/color'
      },
      {
        text: 'Icons',
        children: [
          {
            text: 'Decorative icons',
            to: basePath + '/iconography/decorative-icons'
          },
          {
            text: 'System icons',
            to: basePath + '/iconography/system-icons'
          }
        ]
      },
      {
        text: 'Spacing',
        to: basePath + '/spacing'
      },
      {
        text: 'Tokens',
        to: basePath + '/tokens'
      },
      {
        text: 'Typography',
        to: basePath + '/typography'
      },
      {
        text: 'Web sustainability',
        to: basePath + '/web-sustainability'
      }
    ]);
  }, [location]);

  useTitle({ titlePrefix: `${foundationData?.name} - Foundations` });
  useHashScroll(!!foundationData?.content);

  const pageHeadings = useHeadings();
  useEffect(() => {
    if (pageHeadings.length > 0) {
      setHeadings(pageHeadings);
    }
  }, [pageHeadings]);

  if (foundationData) {
    return (
      <Layout>
        <PageTemplate
          name={foundationData?.name || ''}
          lastUpdated={foundationData?.sys?.publishedAt || ''}
          leadParagraph={foundationData?.leadParagraph || ''}
          seoMetaDescription={foundationData?.pageProperties?.seoMetaDescription || ''}
          navSecondaryMenuTrigger="Foundations"
          navSecondaryItems={navItems}
          navTertiaryItems={headings}
        >
          <Markdown markdown={foundationData?.content || ''} headingOffset={1} />
        </PageTemplate>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <main id="mainContent">Loading...</main>
      </Layout>
    );
  }
};

export default Foundations;