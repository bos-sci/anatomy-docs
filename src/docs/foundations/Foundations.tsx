import { useState, useEffect, useContext } from 'react';
import NavSecondary, { NavItem } from '../shared/navSecondary/NavSecondary';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/pageHeader/PageHeader';
import Markdown from '../shared/Markdown';
import { match } from 'react-router';
import { Foundation, useGetFoundationQuery } from '../../types/contentful';
import { IdLookup } from '../../types/docs';
import useTitle from '../shared/hooks/useTitle';

interface ComponentMatch extends match {
  params: {
    foundationName: string;
  }
}

interface Props {
  match: ComponentMatch;
}

const Foundations = (props:  Props): JSX.Element => {
  const foundationName = props.match.params.foundationName;
  let [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  let [foundationData, setFoundationData] = useState<Foundation>({} as Foundation);

  const idLookup: IdLookup = useContext(IdLookupContext);


  const {data, error} = useGetFoundationQuery({
    variables: {
      id: idLookup.foundations[foundationName].id,
      preview: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true'
    }
  });

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    if (data?.foundation) {
      setFoundationData(data.foundation as Foundation);
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
  }, [data, idLookup, props.match.path]);

  useTitle({titlePrefix: `${foundationData.name} - Foundations`});

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