import { useState, useEffect, useContext } from 'react';
import NavSecondary, { NavItem } from '../shared/components/navSecondary/NavSecondary';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/components/pageHeader/PageHeader';
import Markdown from '../shared/components/Markdown';
import { match } from 'react-router';
import { CodeStandard, useGetCodeStandardQuery } from '../shared/types/contentful';
import { IdLookup } from '../shared/types/docs';
import useTitle from '../shared/hooks/useTitle';

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
  let [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  let [codeStandardData, setCodeStandardData] = useState<CodeStandard>({} as CodeStandard);

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
        text: 'Javascript',
        slug: pathPrefix + 'javascript'
      },
      {
        text: 'DevOps',
        slug: pathPrefix + 'devops'
      },
      {
        text: 'Automated code quality tools',
        slug: pathPrefix + 'automated-code-quality-tools'
      },
    ];
    setNavItems(navItems);
  }, [data, idLookup, props.match.path]);

  useTitle({titlePrefix: `${codeStandardData.name} - Code Standards`});

  return (
    <div className="app-content">
      { navItems && <NavSecondary navItems={ navItems } /> }
        <main>
          {codeStandardData.sys && <>
            <PageHeader name={ codeStandardData.name || '' } publishedAt={ codeStandardData.sys.publishedAt } />
            <Markdown markdown={ codeStandardData.content || ''} />
          </>}
        </main>
    </div>
  );
}

export default CodeStandards;