import { useState, useEffect, useContext } from 'react';
import { NavItemSecondary } from '../../library/components/navigation/navSecondary/NavSecondary';
import { NavItemTertiary } from '../../library/components/navigation/navTertiary/NavTertiary';
import { IdLookupContext } from '../App';
import Markdown from '../shared/components/Markdown';
import { match } from 'react-router';
import { IdLookup } from '../shared/types/docs';
import { GetFoundationQuery, useGetFoundationQuery } from '../shared/types/contentful';
import useTitle from '../shared/hooks/useTitle';
import useHashScroll from '../shared/hooks/useHashScroll';
import useHeadings from '../shared/hooks/useHeadings';
import PageTemplate from '../shared/components/pageTemplate/PageTemplate';
import Layout from '../shared/components/Layout';

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
  const idLookup: IdLookup = useContext(IdLookupContext);
  const [navItems, setNavItems] = useState<NavItemSecondary[]>([] as NavItemSecondary[]);
  const [foundationData, setFoundationData] = useState<GetFoundationQuery['foundation']>({} as GetFoundationQuery['foundation']);
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

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
    if(data?.foundation) {
      setFoundationData(data.foundation);
    }
  }, [data]);

  useEffect(() => {
    // TODO: get rid of .replace() after fixing routing
    const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/')).replace('/iconography', '');
    setNavItems([
      {
        text: 'Accessibility',
        slug: basePath + '/accessibility'
      },
      {
        text: 'Color',
        slug: basePath + '/color'
      },
      {
        text: 'Icons',
        children: [
          {
            text: 'Decorative icons',
            slug: basePath + '/iconography/decorative'
          },
          {
            text: 'System icons',
            slug: basePath + '/iconography/system'
          }
        ]
      },
      {
        text: 'Spacing',
        slug: basePath + '/spacing'
      },
      {
        text: 'Typography',
        slug: basePath + '/typography'
      },
    ]);
  }, [props.match.path]);

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

  if (foundationData) {
    return (
      <Layout>
        <PageTemplate
          name={foundationData?.name || ''}
          lastUpdated={foundationData?.sys?.publishedAt}
          leadParagraph={foundationData?.leadParagraph || ''}
          navSecondaryMenuTrigger="Foundations"
          navSecondaryItems={navItems}
          navSecondaryActiveSlug={props.match.url}
          navTertiaryItems={headings}>
          <Markdown markdown={foundationData?.content || ''} headingOffset={1} />
        </PageTemplate>
      </Layout>
    );
  } else return <Layout><main id="mainContent">Loading...</main></Layout>;
}

export default Foundations;