import { useState, useEffect, useContext } from 'react';
import NavSecondary, { NavItem } from '../shared/components/navSecondary/NavSecondary';
import NavTertiary, { NavItemTertiary } from '../shared/components/navTertiary/NavTertiary';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/components/pageHeader/PageHeader';
import Markdown from '../shared/components/Markdown';
import { match } from 'react-router';
import { ContentGuideline, GetContentGuidelineQuery, useGetContentGuidelineQuery } from '../shared/types/contentful';
import { IdLookup } from '../shared/types/docs';
import useTitle from '../shared/hooks/useTitle';
import useHashScroll from '../shared/hooks/useHashScroll';
import useHeadings from '../shared/hooks/useHeadings';

interface ComponentMatch extends match {
  params: {
    contentName: string;
  }
}

interface Props {
  match: ComponentMatch;
}

const ContentGuidelines = (props:  Props): JSX.Element => {
  const contentName = props.match.params.contentName;
  const [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  const [contentGuidelineData, setContentGuidelineData] = useState<GetContentGuidelineQuery['contentGuideline']>({} as GetContentGuidelineQuery['contentGuideline']);
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

  const idLookup: IdLookup = useContext(IdLookupContext);

  const {data, error} = useGetContentGuidelineQuery({
    variables: {
      id: idLookup.contentGuidelines[contentName].id,
      preview: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true'
    }
  });

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    if (data?.contentGuideline) {
      setContentGuidelineData(data.contentGuideline);
    }
    const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
    const navItems = Object.keys(idLookup.contentGuidelines).map(entry => ({
      text: idLookup.contentGuidelines[entry].name,
      slug: basePath + '/' + entry
    }));
    setNavItems(navItems);
  }, [data, idLookup, props.match.path]);

  useTitle({titlePrefix: `${contentGuidelineData?.name} - Content`});
  useHashScroll(!!contentGuidelineData?.content);

  const pageHeadings = useHeadings(contentGuidelineData?.name);
  useEffect(() => {
    if (contentGuidelineData?.name) {
      setHeadings(pageHeadings.map(heading => {
        return {
          id: heading.id as string,
          text: heading.textContent as string
        };
      }));
    }
  }, [contentGuidelineData?.name, pageHeadings]);

  return (
    <div className="app-content">
      { navItems && <NavSecondary navItems={ navItems } /> }
        <main>
          {contentGuidelineData?.sys && <>
            <div className="intro">
              <PageHeader name={ contentGuidelineData.name || '' } publishedAt={ contentGuidelineData.sys.publishedAt } />
              <Markdown markdown={ contentGuidelineData.leadParagraph || ''} className="body-assertive" />
            </div>
            <NavTertiary navTertiaryItems={ headings } />
            <div className="page-content">
              <Markdown markdown={ contentGuidelineData.content || ''} headingOffset={1} />
            </div>
          </>}
        </main>
    </div>
  );
}

export default ContentGuidelines;