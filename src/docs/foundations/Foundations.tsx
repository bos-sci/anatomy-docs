import { useState, useEffect, useContext } from 'react';
import NavSecondary, { NavItem } from '../shared/navSecondary/NavSecondary';
import useContentful from '../../hooks/useContentful';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/pageHeader/PageHeader';
import Markdown from '../shared/Markdown';
import { match } from 'react-router';
import { Foundation } from '../../types/contentful';
import { IdLookup } from '../../types/docs';

interface ComponentMatch extends match {
  params: {
    foundationName: string;
  }
}

interface Props {
  match: ComponentMatch;
}

interface ContentfulData {
  response?: {
    foundation: Foundation;
  };
  error?: any
}

const Foundations = (props:  Props): JSX.Element => {
  const foundationName = props.match.params.foundationName;
  let [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  let [foundationData, setFoundationData] = useState<Foundation>({} as Foundation);

  const idLookup: IdLookup = useContext(IdLookupContext);

  const query = `
    query FoundationData($id: String!) {
      foundation(id: $id, preview: ${process.env.REACT_APP_CONTENTFUL_PREVIEW}) {
        name
        description
        content
        sys {
          id
          publishedAt
        }
      }
    }`;

  const queryVariables = {
    id: idLookup.foundations[foundationName].id
  };

  const data: ContentfulData = useContentful(query, queryVariables);
  if (data.error) console.error(data.error);

  useEffect(() => {
    if (data.response) {
      setFoundationData(data.response.foundation);
    }
    const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
    const pathPrefix = basePath + '/';
    const navItems = [
      {
        text: 'Accessibility',
        slug: pathPrefix + 'accessibility'
      },
      {
        text: 'Color',
        slug: pathPrefix + 'color'
      },
      {
        text: 'Spacing',
        slug: pathPrefix + 'spacing'
      },
      {
        text: 'Typography',
        slug: pathPrefix + 'typography'
      },
    ];
    setNavItems(navItems);
  }, [data.response, idLookup, props.match.path]);

  return (
    <div className="app-content">
      { navItems && <NavSecondary navItems={ navItems } /> }
        <main>
          {foundationData.sys && <>
            <PageHeader name={ foundationData.name || '' } publishedAt={ foundationData.sys.publishedAt } />
            <Markdown markdown={ foundationData.description || ''} className="body-assertive" />
            <Markdown markdown={ foundationData.content || ''} headingOffset={1} />
          </>}
        </main>
    </div>
  );
}

export default Foundations;