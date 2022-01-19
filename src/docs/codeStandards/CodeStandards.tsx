import { useState, useEffect, useContext } from 'react';
import NavSecondary, { NavItem } from '../shared/components/navSecondary/NavSecondary';
import NavTertiary, { NavItemTertiary } from '../shared/components/navTertiary/NavTertiary';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/components/pageHeader/PageHeader';
import Markdown from '../shared/components/Markdown';
import { match } from 'react-router';
import { CodeStandard, useGetCodeStandardQuery } from '../shared/types/contentful';
import { IdLookup } from '../shared/types/docs';
import useTitle from '../shared/hooks/useTitle';
import useHashScroll from '../shared/hooks/useHashScroll';
import useHeadings from '../shared/hooks/useHeadings';

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
  const [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  const [codeStandardData, setCodeStandardData] = useState<CodeStandard>({} as CodeStandard);
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
      setCodeStandardData(data.codeStandard as CodeStandard);
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

  useTitle({titlePrefix: `${codeStandardData.name} - Code Standards`});
  useHashScroll(!!codeStandardData.content);

  const pageHeadings = useHeadings(codeStandardData.name);
  useEffect(() => {
    if (codeStandardData.name) {
      setHeadings(pageHeadings.map(heading => {
        return {
          id: heading.id as string,
          text: heading.textContent as string
        };
      }));
    }
  }, [codeStandardData.name, pageHeadings]);

  return (
    <div className="app-content">
      { navItems && <NavSecondary navItems={ navItems } /> }
        <main>
          {codeStandardData.sys && <>
            <div className="intro">
              <PageHeader name={ codeStandardData.name || '' } publishedAt={ codeStandardData.sys.publishedAt } />
              <Markdown markdown={ codeStandardData.leadParagraph || '' } className="body-assertive" />
            </div>
            <NavTertiary navTertiaryItems={ headings } />
            <div className="page-content">
              <Markdown markdown={ codeStandardData.content || ''} />
            </div>
          </>}
        </main>
    </div>
  );
}

export default CodeStandards;