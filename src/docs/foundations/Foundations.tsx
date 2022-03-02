import { useState, useEffect, useContext } from 'react';
import { NavItemSecondary } from '../../library/components/navSecondary/NavSecondary';
import { NavItemTertiary } from '../../library/components/navTertiary/NavTertiary';
import { IdLookupContext } from '../App';
import Markdown from '../shared/components/Markdown';
import { match } from 'react-router';
import { GetFoundationQuery, useGetFoundationQuery } from '../shared/types/contentful';
import { IdLookup } from '../shared/types/docs';
import useTitle from '../shared/hooks/useTitle';
import useHashScroll from '../shared/hooks/useHashScroll';
import useHeadings from '../shared/hooks/useHeadings';
import PageTemplate from '../shared/components/pageTemplate/PageTemplate';

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
  const [navItems, setNavItems] = useState<NavItemSecondary[]>([] as NavItemSecondary[]);
  const [foundationData, setFoundationData] = useState<GetFoundationQuery['foundation']>({} as GetFoundationQuery['foundation']);
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
      setFoundationData(data.foundation);
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

  useTitle({titlePrefix: `${foundationData?.name} - Foundations`});
  useHashScroll(!!foundationData?.content);

  const pageHeadings = useHeadings(foundationData?.name);
  useEffect(() => {
    if (foundationData?.name) {
      setHeadings(pageHeadings.map(heading => {
        return {
          id: heading.id as string,
          text: heading.textContent as string
        };
      }));
    }
  }, [foundationData?.name, pageHeadings]);

  return (
    <PageTemplate
      name={foundationData?.name || ''}
      lastUpdated={foundationData?.sys?.publishedAt}
      leadParagraph={foundationData?.leadParagraph || ''}
      navSecondaryMenuTrigger="Foundations"
      navSecondaryItems={navItems}
      navTertiaryItems={headings}>
      <Markdown markdown={foundationData?.content || ''} headingOffset={1} />
    </PageTemplate>
  );
}

export default Foundations;