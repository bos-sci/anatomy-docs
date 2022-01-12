import { useState, useEffect, useContext } from 'react';
import NavSecondary, { NavItem } from '../shared/components/navSecondary/NavSecondary';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/components/pageHeader/PageHeader';
import Markdown from '../shared/components/Markdown';
import { match } from 'react-router';
import { Foundation, useGetFoundationQuery } from '../shared/types/contentful';
import { IdLookup } from '../shared/types/docs';
import useTitle from '../shared/hooks/useTitle';
import useHashScroll from '../shared/hooks/useHashScroll';

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
  useHashScroll(!!foundationData.content);

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