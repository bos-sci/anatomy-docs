import { useState, useEffect, useContext } from 'react';
import NavSecondary, { NavItem } from '../shared/components/navSecondary/NavSecondary';
import NavTertiary, { NavItemTertiary } from '../shared/components/navTertiary/NavTertiary';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/components/pageHeader/PageHeader';
import Markdown from '../shared/components/Markdown';
import { match } from 'react-router';
import { Foundation, useGetFoundationQuery } from '../shared/types/contentful';
import { IdLookup } from '../shared/types/docs';
import useTitle from '../shared/hooks/useTitle';
import useHashScroll from '../shared/hooks/useHashScroll';
import useHeadings from '../shared/hooks/useHeadings';

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
  const [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  const [foundationData, setFoundationData] = useState<Foundation>({} as Foundation);
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

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

  const pageHeadings = useHeadings(foundationData.name);
  useEffect(() => {
    if (foundationData.name) {
      setHeadings(pageHeadings.map(heading => {
        return {
          id: heading.id as string,
          text: heading.textContent as string
        };
      }));
    }
  }, [foundationData.name, pageHeadings]);

  return (
    <div className="app-content">
      { navItems && <NavSecondary navItems={ navItems } /> }
        <main>
          {foundationData.sys && <>
          <div className="intro">
            <PageHeader name={ foundationData.name || '' } publishedAt={ foundationData.sys.publishedAt } />
            <Markdown markdown={ foundationData.description || ''} className="body-assertive" />
          </div>
          <NavTertiary navTertiaryItems={headings}/>
          <div className="page-content">
            <Markdown markdown={ foundationData.content || ''} headingOffset={1} />
          </div>
          </>}
        </main>
    </div>
  );
}

export default Foundations;