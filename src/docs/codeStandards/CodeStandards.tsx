import { useState, useEffect, useContext } from 'react';
import { NavItemSecondary } from '../../library/components/navSecondary/NavSecondary';
import { NavItemTertiary } from '../../library/components/navTertiary/NavTertiary';
import { IdLookupContext } from '../App';
import Markdown from '../shared/components/Markdown';
import { match } from 'react-router';
import { GetCodeStandardQuery, useGetCodeStandardQuery } from '../shared/types/contentful';
import { IdLookup } from '../shared/types/docs';
import useTitle from '../shared/hooks/useTitle';
import useHashScroll from '../shared/hooks/useHashScroll';
import useHeadings from '../shared/hooks/useHeadings';
import PageTemplate from '../shared/components/pageTemplate/PageTemplate';
import Layout from '../shared/components/Layout';

interface ComponentMatch extends match {
  params: {
    standardName: string;
  }
}

interface Props {
  match: ComponentMatch;
}

const CodeStandards = (props:  Props): JSX.Element => {
  const standardName = props.match.params.standardName;
  const [navItems, setNavItems] = useState<NavItemSecondary[]>([] as NavItemSecondary[]);
  const [codeStandardData, setCodeStandardData] = useState<GetCodeStandardQuery['codeStandard']>({} as GetCodeStandardQuery['codeStandard']);
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

  const idLookup: IdLookup = useContext(IdLookupContext);

  const {data, error} = useGetCodeStandardQuery({
    variables: {
      id: idLookup.codeStandards[standardName].id,
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
    const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
    const pathPrefix = basePath + '/';
    const navItems = [
      {
        text: 'General',
        slug: pathPrefix + 'general'
      },
      {
        text: 'Accessibility',
        slug: pathPrefix + 'accessibility'
      },
      {
        text: 'HTML',
        slug: pathPrefix + 'html'
      },
      {
        text: 'CSS',
        slug: pathPrefix + 'css'
      },
      {
        text: 'JavaScript',
        slug: pathPrefix + 'javascript'
      },
      {
        text: 'DevOps',
        slug: pathPrefix + 'devops'
      },
    ];
    setNavItems(navItems);
  }, [data, idLookup, props.match.path]);

  useTitle({titlePrefix: `${codeStandardData?.name} - Code Standards`});
  useHashScroll(!!codeStandardData?.content);

  const pageHeadings = useHeadings(codeStandardData?.name);
  useEffect(() => {
    if (codeStandardData?.name) {
      setHeadings(pageHeadings.map(heading => {
        return {
          id: heading.id as string,
          text: heading.textContent as string
        };
      }));
    }
  }, [codeStandardData?.name, pageHeadings]);

  return (
    <Layout>
      <PageTemplate
        name={codeStandardData?.name || ''}
        lastUpdated={codeStandardData?.sys?.publishedAt}
        leadParagraph={codeStandardData?.leadParagraph || ''}
        navSecondaryMenuTrigger="Code standards"
        navSecondaryItems={navItems}
        navTertiaryItems={headings}>
        <Markdown markdown={ codeStandardData?.content || '' } />
      </PageTemplate>
    </Layout>
  );
}

export default CodeStandards;