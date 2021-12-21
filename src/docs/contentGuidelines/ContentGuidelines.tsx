import { useState, useEffect, useContext } from 'react';
import NavSecondary, { NavItem } from '../shared/navSecondary/NavSecondary';
import useContentful from '../../hooks/useContentful';
import { IdLookupContext } from '../App';
import PageHeader from '../shared/pageHeader/PageHeader';
import Markdown from '../shared/Markdown';
import { match } from 'react-router';
import { ContentGuideline } from '../../types/contentful';
import { IdLookup } from '../../types/docs';

interface ComponentMatch extends match {
  params: {
    contentName: string;
  }
}

interface Props {
  match: ComponentMatch;
}

interface ContentfulData {
  response?: {
    contentGuideline: ContentGuideline;
  };
  error?: any
}

const ContentGuidelines = (props:  Props): JSX.Element => {
  const contentName = props.match.params.contentName;
  let [navItems, setNavItems] = useState<NavItem[]>([] as NavItem[]);
  let [contentGuidelineData, setContentGuidelineData] = useState<ContentGuideline>({} as ContentGuideline);

  const idLookup: IdLookup = useContext(IdLookupContext);

  const query = `
    query ContentGuidelineData($id: String!) {
      contentGuideline(id: $id, preview: ${process.env.REACT_APP_CONTENTFUL_PREVIEW}) {
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
    id: idLookup.contentGuidelines[contentName].id
  };

  const data: ContentfulData = useContentful(query, queryVariables);
  if (data.error) console.error(data.error);

  useEffect(() => {
    if (data.response) {
      setContentGuidelineData(data.response.contentGuideline);
    }
    const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
    const navItems = Object.keys(idLookup.contentGuidelines).map(entry => ({
      text: idLookup.contentGuidelines[entry].name,
      slug: basePath + '/' + entry
    }));
    setNavItems(navItems);
  }, [data.response, idLookup, props.match.path]);

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