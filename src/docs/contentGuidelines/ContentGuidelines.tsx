import { useState, useEffect, useContext } from 'react';
import NavSecondary, { NavItem } from '../shared/components/navSecondary/NavSecondary';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/components/pageHeader/PageHeader';
import Markdown from '../shared/components/Markdown';
import { match } from 'react-router';
import { ContentGuideline, useGetContentGuidelineQuery } from '../shared/types/contentful';
import { IdLookup } from '../shared/types/docs';
import useTitle from '../shared/hooks/useTitle';
import useHashScroll from '../shared/hooks/useHashScroll';

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
  let [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  let [contentGuidelineData, setContentGuidelineData] = useState<ContentGuideline>({} as ContentGuideline);

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
      setContentGuidelineData(data.contentGuideline as ContentGuideline);
    }
    const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
    const navItems = Object.keys(idLookup.contentGuidelines).map(entry => ({
      text: idLookup.contentGuidelines[entry].name,
      slug: basePath + '/' + entry
    }));
    setNavItems(navItems);
  }, [data, idLookup, props.match.path]);

  useTitle({titlePrefix: `${contentGuidelineData.name} - Content`});
  useHashScroll(!!contentGuidelineData.content);

  return (
    <div className="app-content">
      { navItems && <NavSecondary navItems={ navItems } /> }
        <main>
          {contentGuidelineData.sys && <>
            <PageHeader name={ contentGuidelineData.name || '' } publishedAt={ contentGuidelineData.sys.publishedAt } />
            <Markdown markdown={ contentGuidelineData.description || ''} className="body-assertive" />
            <Markdown markdown={ contentGuidelineData.content || ''} headingOffset={1} />
          </>}
        </main>
    </div>
  );
}

export default ContentGuidelines;