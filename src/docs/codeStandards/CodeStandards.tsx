import { useState, useEffect, useContext } from 'react';
import NavSecondary, { NavItem } from '../shared/navSecondary/NavSecondary';
import useContentful from '../../hooks/useContentful';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/pageHeader/PageHeader';
import Markdown from '../shared/Markdown';
import { match } from 'react-router';
import { CodeStandard } from '../../types/contentful';
import { IdLookup } from '../../types/docs';

interface ComponentMatch extends match {
  params: {
    standardName: string;
  }
}

interface Props {
  match: ComponentMatch;
}

interface ContentfulData {
  response?: {
    codeStandard: CodeStandard;
  };
  error?: any
}

const CodeStandards = (props:  Props) => {
  const standardName = props.match.params.standardName;
  let [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  let [codeStandardData, setCodeStandardData] = useState<CodeStandard>({} as CodeStandard);

  const idLookup: IdLookup = useContext(IdLookupContext);

  const query = `
    query CodeStandardData($id: String!) {
      codeStandard(id: $id, preview: ${process.env.REACT_APP_CONTENTFUL_PREVIEW}) {
        name
        content
        sys {
          id
          publishedAt
        }
      }
    }`;

  const queryVariables = {
    id: idLookup.codeStandards[standardName].id
  };

  const data: ContentfulData = useContentful(query, queryVariables);
  if (data.error) console.error(data.error);

  useEffect(() => {
    if (data.response) {
      setCodeStandardData(data.response.codeStandard);
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
  }, [data.response, idLookup, props.match.path]);

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