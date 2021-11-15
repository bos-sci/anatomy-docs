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
    codeStandard: string;
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
  const codeStandard = props.match.params.codeStandard;
  let [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  let [codeStandardData, setCodeStandardData] = useState<CodeStandard>({} as CodeStandard);

  const idLookup: IdLookup = useContext(IdLookupContext);

  const query = `
    query CodeStandardData($id: String!) {
      codeStandard(id: $id) {
        name
        content
        sys {
          id
          publishedAt
        }
      }
    }`;

  const queryVariables = {
    id: idLookup.codeStandards[codeStandard].id
  };

  const data: ContentfulData = useContentful(query, queryVariables);
  if (data.error) console.error(data.error);

  useEffect(() => {
    if (data.response) {
      setCodeStandardData(data.response.codeStandard);
    }
    const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
    const navItems = Object.keys(idLookup.codeStandards).map(entry => ({
      text: idLookup.codeStandards[entry].name,
      slug: basePath + '/' + entry
    }));
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